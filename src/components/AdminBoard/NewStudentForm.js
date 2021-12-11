import React, {useRef, useState, useEffect} from "react";
import './AdminForms.css'
import '../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    categoryName: '',
    categoryDescription: '',
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
                const response = await axios.post('http://localhost:8081/api/v1/categories/', {
                    name: state.categoryName,
                    description: state.categoryDescription
                }, config)
                console.log(response)
                setState({...state, sendNewCategory: false})
            } catch (e) {
                console.log(e);
                setState({...state, error: true})
                setTimeout(() =>
                        setState({...state, error: false, sendNewCategory: false}),
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
                    <h1>Cadastrar nova categoria!</h1>
                    <input onChange={handleChangeName} type="Nome" placeholder="Nome"/>
                    <input  onChange={handleChangeDescription} type="Descrição" placeholder="Autor"/>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewCategoryForm