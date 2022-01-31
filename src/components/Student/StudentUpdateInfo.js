import React, {useRef, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';

import '../Register/RegisterForm.css'
import './StudentBoard.css'

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

export default function StudentUpdateInfo() {
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

/*    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/students/'+history.location.state.student+''
        ).then(({data}) => {
            setState(data.data);
        })
    }, [])
    console.log(state)*/

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/students/161021778'
        ).then(({data}) => {
            console.log(data)
            setState(data);
        })
    }, [])
    console.log(state)

    return (
        <div className="backPage">
            <h1>Autalizar informações pessoais</h1>
            <div className="alignCenter">
                <table className="informationStudent boxShadow">
                    <h2>Dados pesoais</h2>
                    <tr>
                        <th><h3>Imagem</h3></th>
                        <th><h3>RA</h3></th>
                        <th><h3>Nome</h3></th>
                        <th><h3>Aniversário</h3></th>
                    </tr>
                    <tr>
                        <td ><input className="inputEdit" /></td>
                        <td ><input className="inputEdit" /></td>
                        <td ><input onChange={handleChangeName} id="userName" type="name" placeholder="Nome" value={state.name}/></td>
                        <td ><input className="inputEdit" /></td>
                    </tr>
                    <h2>Informações de contato</h2>
                    <tr>
                        <th><h3>Email</h3></th>
                        <th><h3>Telefone</h3></th>
                    </tr>
                    <tr>
                        <td ><input className="inputEdit" /></td>
                        <td ><input className="inputEdit" /></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

