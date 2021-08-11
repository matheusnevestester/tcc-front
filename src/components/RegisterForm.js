import React, {useEffect, useRef, useState} from "react";
import './RegisterForm.css'

const axios = require('axios');


const initialState = {
    username: '',
    password: '',
    error: false,
    sendLogin: false,
    token: null,
}

const SignUpForm = () => {

    const [state, setState] = useState(initialState);

    const handleSignInBtn = (event) => {
        event.preventDefault();
        setState({...state, sendLogin: true})
        console.log('clicou sign in')
    }
    const handleChangeUsername = ({target}) => setState({...state, username: target.value})
    const handleChangePassword = ({target}) => setState({...state, password: target.value})


    useEffect(() => {
        if (!state.sendLogin) return
        const signInClick = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8082/api/v1/login/', {
                    email: state.username,
                    password: state.password
                }, config)
                setState({...state, token: response.token, sendLogin: false})
                console.log(state.token)
                document.cookie = 'token='+ response.token
            } catch (e) {
                setState({...state, error: true})
                setTimeout(() =>
                    setState({...state, error: false, sendLogin: false}),
                    2000)
            }
        }
        signInClick()
    }, [state.sendLogin])

    console.log(state)


    /*
    front effects
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

    const handleCloseAlert = () =>{
        console.log("fazer")
    }

    return (
        <>
            <div className="container-mobile center container-default-class" id="container-mobile">
                <div className="form-container sign-up-container-mobile center">
                    <a className='clickableLink' onClick={handleSignUpClickMobile}>Se já faz parte do
                        time faça seu login aqui!</a>
                    <form>
                        <h1>Cadastre-se</h1>
                        <span>use suas informações pessoais para realizar o cadastro</span>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <button>Me cadastrar!</button>
                    </form>
                </div>
                <div className="form-container sign-in-container-mobile" id='mobile-sign-in'>
                    <a className='clickableLink' onClick={handleSignInClickMobile}>Não tem conta?
                        Cadastre-se aqui</a>
                    <form>
                        {state.alertError && <div className="alert">
                            <span className="closebtn" onClick={handleCloseAlert}>&times;</span>
                            This is an alert box.
                        </div>}
                        <h1>Faça o login aqui!</h1>
                        <input type="email" placeholder="Email"  onChange={handleChangeUsername}/>
                        <input type="password" placeholder="Senha" onChange={handleChangePassword}/>
                        <a href="#">Esqueceu sua senha? Clique aqui!</a>
                        <button>Entrar!</button>
                    </form>
                </div>
            </div>


            <div className="container center container-default-class" id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Cadastre-se</h1>
                        <span>use suas informações pessoais para realizar o cadastro</span>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha" />
                        <button>Me cadastrar!</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        {state.error && <div className="alert">
                            <span className="alert-closebtn">&times;</span>
                            Oops parece que algo deu errado
                        </div>}
                        <h1>Faça o login aqui!</h1>
                        <input type="email" placeholder="Email"  onChange={handleChangeUsername}/>
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
            </div>
        </>
    );
}

export default SignUpForm