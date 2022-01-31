import React, {useEffect, useRef, useState} from "react";
import './RegisterForm.css'
import useToken from "../../utils/getToken";
import getAuthToken from "../../utils/getToken";
const axios = require('axios');


const initialState = {
    authorized: '',
    username: '',
    password: '',
    signUpEmail: '',
    signUpPass: '',
    signUpName: '',
    signUpSurname: '',
    signUpPhone: '',
    signUpRA: '',
    errorLogin: false,
    errorSignUp: false,
    loginSuccess: false,
    signUpSuccess: false,
    sendLogin: false,
    sendSignUp: false,
    token: null,
}

export default function SignUpForm({setToken}){
    const [state, setState] = useState(initialState);
    let authorized = false;
    const handleSignInBtn = (event) => {
        event.preventDefault();
        setState({...state, sendLogin: true})
        console.log('clicou sign in')
    }

    const handleSignUpBtn = (event) => {
        event.preventDefault();
        setState({...state, sendSignUp: true})
        console.log('clicou sign up')
    }
// login onchange
    const handleChangeUsername = ({target}) => setState({...state, username: target.value})
    const handleChangePassword = ({target}) => setState({...state, password: target.value})

    const handleChangeRA = ({target}) => setState({...state, signUpRA: target.value})
    const handleSignUpEmail = ({target}) => setState({...state, signUpEmail: target.value})
    const handleSignUpRA = ({target}) => setState({...state, signUpPass: target.value})


    useEffect(() => {
        setState({...state, authorized: getAuthToken()})
        console.log(state.authorized)
    },[])

    // effect signin
    useEffect(() => {
        if (!state.sendLogin) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8082/api/v1/login', {
                    email: state.username,
                    password: state.password
                }, config)
                console.log(response)
                document.cookie = 'token=' + response.data.token
                localStorage.setItem("loggedUser","22")
                window.location.reload(false);
                setState({...state, loginSuccess: true, sendLogin: false})
            } catch (e) {
                setState({...state, errorLogin: true})
                setTimeout(() =>
                        setState({...state, errorLogin: false, sendLogin: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendLogin])

    // effect signup

    useEffect(() => {
        if (!state.sendSignUp) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8082/api/v1/signin', {
                    email: state.signUpEmail,
                    password: state.signUpPass,
                    firstName: state.signUpName,
                    lastName: state.signUpSurname,
                    phone: state.signUpPhone
                }, config)
                setState({...state, signUpSuccess: true, sendSignUp: false})
                console.log(response)
            } catch (e) {
                setState({...state, errorSignUp: true})
                setTimeout(() =>
                        setState({...state, errorSignUp: false, sendSignUp: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendSignUp])


    /*
    front handling
    */

    const handleSignUpClick = () => {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active")
    }

    const handleSignInClick = () => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active")
    }

    const handleSignInClickMobile = () => {
        const container = document.getElementById('mobile-sign-in');
        container.classList.add("fade-out")
    }

    const handleSignUpClickMobile = () => {
        const container = document.getElementById('mobile-sign-in');
        container.classList.remove("fade-out")
    }

    const handleCloseAlert = () => {
        console.log("fazer")
    }


    return (

        <>
            {!state.authorized &&
            <div className="container-mobile center container-default-class" id="container-mobile">
                <div className="form-container sign-up-container-mobile center">
                    <a className='clickableLink' onClick={handleSignUpClickMobile}>Se já faz parte do
                        time faça seu login aqui!</a>
                    <form>
                        <h1>Cadastre-se</h1>
                        <span>Use suas informações pessoais para solicitar acesso!</span>
                        <input type="RA" placeholder="RA" onChange={handleChangeRA}/>
                        <input type="email" placeholder="Email" onChange={handleSignUpEmail}/>
                        <button>Solicitar nova conta!</button>
                    </form>
                </div>
                <div className="form-container sign-in-container-mobile" id='mobile-sign-in'>
                    <a className='clickableLink' onClick={handleSignInClickMobile}>Não tem conta?
                        Cadastre-se aqui</a>
                    <form>
                        <h1>Faça o login aqui!</h1>
                        <input type="email" placeholder="Email" onChange={handleChangeUsername}/>
                        <input type="password" placeholder="Senha" onChange={handleChangePassword}/>
                        <a href="#">Esqueceu sua senha? Clique aqui!</a>
                        <button>Entrar!</button>
                    </form>
                </div>
            </div>
            }

            {!state.authorized &&
            <div className="container center container-default-class" id="container">
                <div className="form-container sign-up-container">
                    <form>
                        {state.signUpSuccess && <div className="alert-succes">
                            <span className="alert-closebtn">&times;</span>
                            Cadastro realizado com sucesso
                        </div>}
                        {state.errorSignUp && <div className="alert">
                            <span className="alert-closebtn">&times;</span>
                            Oops parece que algo deu errado
                        </div>}
                        <h1>Cadastre-se</h1>
                        <span>Use suas informações pessoais para solicitar acesso!</span>
                        <input type="RA" placeholder="RA" onChange={handleChangeRA}/>
                        <input type="email" placeholder="Email" onChange={handleSignUpEmail}/>
                        <button onClick={handleSignUpBtn}>Solicitar nova conta!</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        {state.loginSuccess && <div className="alert-succes">
                            <span className="alert-closebtn">&times;</span>
                            Login realizado com sucesso
                        </div>}
                        {state.errorLogin && <div className="alert">
                            <span className="alert-closebtn">&times;</span>
                            Oops parece que algo deu errado
                        </div>}
                        <h1>Faça o login aqui!</h1>
                        <input type="email" placeholder="Email" onChange={handleChangeUsername}/>
                        <input type="password" placeholder="Senha" onChange={handleChangePassword}/>
                        <a href="#">Esqueceu sua senha? Clique aqui!</a>
                        <button onClick={handleSignInBtn}>Entrar!</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Para se conectar faça o login com seu email e senha</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>Entrar!
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Não faz parte do nosso time ainda? Comece agora!</h1>
                            <p>Faça sua conta hoje mesmo e se junte a nós nessa jornada</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Me
                                cadastrar!
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
