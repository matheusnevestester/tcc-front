import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
import {useHistory} from "react-router-dom";
const axios = require('axios');

const userInitialState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    grade: '',
    birthday: '',
    editBtn: false
}

const UpdateUserForm = () => {
    const history = useHistory();

    const [state, setState] = useState(userInitialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, editBtn: true})
    }

    const handleChangeName = ({target}) => setState({...state, name: target.value})
    const handleChangeEmail = ({target}) => setState({...state, email: target.value})
    const handleChangePhone = ({target}) => setState({...state, phone: target.value})
    const handleChangeGrade = ({target}) => setState({...state, grade: target.value})
    const handleChangeBirthday = ({target}) => setState({...state, birthday: target.value})

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/students/'+history.location.state.student+''
        ).then(({data}) => {
            setState(data);
        })
    }, [])
    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    <h1>Editar estudante</h1>
                    <input onChange={handleChangeName} id="userName" type="name" placeholder="Nome" value={state.name}/>
                    <input  onChange={handleChangeEmail} type="user-mail" placeholder="Email" value={state.email}/>
                    <input  onChange={handleChangePhone} type="user-phone" placeholder="Telefone" value={state.phone}/>
                    <input  onChange={handleChangeGrade} type="user-grade" placeholder="Série" value={state.grade}/>
                    <input  onChange={handleChangeBirthday} type="user-birth" placeholder="Data de aniversário" value={state.birthday}/>
                    <button onClick={handleClickButton}>Editar</button>
                </form>
            </div>
        </>
    )
}

export default UpdateUserForm