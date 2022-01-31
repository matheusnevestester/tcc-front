import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    conferenceSubject: '',
    conferenceStartTime: '',
    conferenceDuration: 0,
    conferenceStatus:'OFF',
    newConferenceSuccess: false,
    newConferenceFailure: false,
    sendNewConference: false,
    articleId: null,
}

const NewConferenceForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewConference: true})
    }

    const handleChangeSubject = ({target}) => setState({...state, conferenceSubject: target.value})
    const handleChangeStartDate = ({target}) => setState({...state, conferenceDescription: target.value})
    const handleChangeDuration = ({target}) => setState({...state, conferenceDuration: target.value})

    useEffect(() => {
        if (!state.sendNewConference) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8083/api/v1/conferences', {
                    subject: "1st Platform Conference",
                    startDate: "2021-12-15 20:30:00",
                    endDate: "2021-12-15 21:30:00",
                    duration: 60,
                    status: "OFF"
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
                    {state.newConferenceSuccess && <div className="alert-succes">
                        <span className="alert-closebtn">&times;</span>
                        Cadastro realizado com sucesso
                    </div>}
                    {state.newConferenceFailure && <div className="alert">
                        <span className="alert-closebtn">&times;</span>
                        Oops parece que algo deu errado
                    </div>}
                    <h1>Cadastrar nova palestra!</h1>
                    <input onChange={handleChangeSubject} type="name" placeholder="Assunto"/>
                    <input  onChange={handleChangeStartDate} type="startDateTime" placeholder="Horário de início"/>
                    <input  onChange={handleChangeDuration} type="duration" placeholder="Duração prevista"/>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewConferenceForm