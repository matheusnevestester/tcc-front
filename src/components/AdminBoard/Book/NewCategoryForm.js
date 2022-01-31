import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    categoryName: '',
    categoryDescription: '',
    newCategorySuccess: false,
    newCategoryFailure: false,
    error: false,
    sendNewCategory: false,
    articleId: null,
}

const NewCategoryForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewCategory: true})
    }

    const handleChangeName = ({target}) => setState({...state, categoryName: target.value})
    const handleChangeDescription = ({target}) => setState({...state, categoryDescription: target.value})

    useEffect(() => {
        if (!state.sendNewCategory) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8081/api/v1/categories', {
                    name: state.categoryName,
                    description: state.categoryDescription
                }, config)
                console.log(response)
                setState({...state, sendNewCategory: false, newCategorySuccess: true})
            } catch (e) {
                console.log(e);
                setState({...state, newCategoryFailure: true})
                setTimeout(() =>
                        setState({...state, newCategoryFailure: false, sendNewCategory: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendNewCategory])

    console.log(state)

    return (
        <>
        <div className="admin-container center">
            <form className="admin-form">
                {state.newCategorySuccess && <div className="alert-succes">
                <span className="alert-closebtn">&times;</span>
                Cadastro realizado com sucesso
            </div>}
                {state.newCategoryFailure && <div className="alert">
                    <span className="alert-closebtn">&times;</span>
                    Oops parece que algo deu errado
                </div>}
                <h1>Cadastrar nova categoria!</h1>
                <input onChange={handleChangeName} type="name" placeholder="Nome"/>
                <input  onChange={handleChangeDescription} type="description" placeholder="Descrição"/>
            <button onClick={handleClickButton}>Cadastrar</button>
        </form>
        </div>
</>
)
}

export default NewCategoryForm