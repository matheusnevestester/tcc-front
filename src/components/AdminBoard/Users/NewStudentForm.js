import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    studentNumberId: '',
    studentClass: '',
    studentName: '',
    studentPhone: '',
    studentBirthday: '',
    studentEmail: '',
    studentPassword: '',
    newStudentSuccess: false,
    newStudentFailure: false,
    sendNewStudent: false,
    articleId: null,
}

const NewStudentForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewStudent: true})
    }

    const handleChangeNumberId= ({target}) => setState({...state, studentNumberId: target.value})
    const handleChangeClass = ({target}) => setState({...state, studentClass: target.value})
    const handleChangeName = ({target}) => setState({...state, studentName: target.value})
    const handleChangeBirthday = ({target}) => setState({...state, studentBirthday: target.value})
    const handleChangePhone = ({target}) => setState({...state, studentPhone: target.value})
    const handleChangeEmail = ({target}) => setState({...state, studentEmail: target.value})
    const handleChangePassword = ({target}) => setState({...state, studentPassword: target.value})

    useEffect(() => {
        if (!state.sendNewStudent) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8081/api/v1/students', {
                    id: parseInt(state.studentNumberId),
                    name: state.studentName,
                    email: state.studentEmail,
                    password: state.studentPassword.toString(),
                    phone: state.studentPhone.toString(),
                    grade: state.studentClass,
                    birthday: state.studentBirthday

                }, config)
                console.log(response)
                setState({...state, sendNewStudent: false, newStudentSuccess: true})
            } catch (e) {
                console.log(e);
                setState({...state, newStudentFailure: true})
                setTimeout(() =>
                        setState({...state, newStudentFailure: false, sendNewStudent: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendNewStudent])

    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    {state.newStudentSuccess && <div className="alert-succes">
                        <span className="alert-closebtn">&times;</span>
                        Cadastro realizado com sucesso
                    </div>}
                    {state.newStudentFailure && <div className="alert">
                        <span className="alert-closebtn">&times;</span>
                        Oops parece que algo deu errado
                    </div>}
                    <h1>Cadastrar novo estudante!</h1>
                    <input  onChange={handleChangeNumberId} type="RA" placeholder="RA"/>
                    <input  onChange={handleChangeClass} type="Class" placeholder="Turma"/>
                    <input onChange={handleChangeName} type="Name" placeholder="Nome"/>
                    <input  onChange={handleChangeBirthday} type="Birthday" placeholder="Aniversário"/>
                    <input  onChange={handleChangePhone} type="Phone" placeholder="Phone"/>
                    <input  onChange={handleChangeEmail} type="Email" placeholder="Email"/>
                    <input  onChange={handleChangePassword} type="Pass" placeholder="Senha"/>

                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewStudentForm