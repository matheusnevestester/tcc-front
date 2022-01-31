import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    groupName: '',
    groupDescription: '',
    groupStatus:'ACTIVE',
    newGroupSuccess: false,
    newGroupFailure: false,
    sendNewGroup: false,
    articleId: null,
}

const NewGroupForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewGroup: true})
    }

    const handleChangeName = ({target}) => setState({...state, groupName: target.value})
    const handleChangeDescription = ({target}) => setState({...state, groupDescription: target.value})

    useEffect(() => {
        if (!state.sendNewGroup) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8083/api/v1/groups', {
                    name: state.groupName,
                    description: state.groupDescription,
                    status: state.groupStatus
                }, config)
                console.log(response)
                setState({...state, sendNewGroup: false, newGroupSuccess: true})
            } catch (e) {
                console.log(e);
                setState({...state, newGroupFailure: true})
                setTimeout(() =>
                        setState({...state, newGroupFailure: false, sendNewGroup: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendNewGroup])

    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    {state.newGroupSuccess && <div className="alert-succes">
                        <span className="alert-closebtn">&times;</span>
                        Cadastro realizado com sucesso
                    </div>}
                    {state.newGroupFailure && <div className="alert">
                        <span className="alert-closebtn">&times;</span>
                        Oops parece que algo deu errado
                    </div>}
                    <h1>Cadastrar novo grupo do livro!</h1>
                    <input onChange={handleChangeName} type="name" placeholder="Nome"/>
                    <input  onChange={handleChangeDescription} type="description" placeholder="Descrição do grupo"/>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewGroupForm