import React, {useRef} from "react";
import './RegisterForm.css'

class SignUpForm extends React.Component {

    handleSignUpClick() {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active")
        console.log('test')
    }

    handleSignInClick() {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active")
        console.log('test')
    }

    handleSignInClickMobile() {
        const container = document.getElementById('mobile-sign-in');
        container.classList.add("fade-out")
        console.log('testing this shit')
    }

    handleSignUpClickMobile() {
        const container = document.getElementById('mobile-sign-in');
        container.classList.remove("fade-out")
        console.log('testing this shit 3')
    }

    render() {
        return (
            <>
                <div className="container-mobile center container-default-class" id="container-mobile">
                    <div className="form-container sign-up-container-mobile center">
                        <a className='clickableLink' onClick={() => this.handleSignUpClickMobile()}>Se já faz parte do
                            time faça seu login aqui!</a>
                        <form action="#">
                            <h1>Cadastre-se</h1>
                            <span>use suas informações pessoais para realizar o cadastro</span>
                            <input type="text" placeholder="Nome"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Senha"/>
                            <button>Me cadastrar!</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container-mobile" id='mobile-sign-in'>
                        <a className='clickableLink' onClick={() => this.handleSignInClickMobile()}>Não tem conta?
                            Cadastre-se aqui</a>
                        <form action="#">
                            <h1>Faça o login aqui!</h1>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Senha"/>
                            <a href="#">Esqueceu sua senha? Clique aqui!</a>
                            <button>Entrar!</button>
                        </form>
                    </div>
                </div>


                <div className="container center container-default-class" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Cadastre-se</h1>
                            <span>use suas informações pessoais para realizar o cadastro</span>
                            <input type="text" placeholder="Nome"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Senha"/>
                            <button>Me cadastrar!</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Faça o login aqui!</h1>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Senha"/>
                            <a href="#">Esqueceu sua senha? Clique aqui!</a>
                            <button>Entrar!</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Bem vindo de volta!</h1>
                                <p>Para se conectar faça o login com seu email e senha</p>
                                <button className="ghost" id="signIn" onClick={() => this.handleSignInClick()}>Entrar!
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Não faz parte do nosso time ainda? Comece agora!</h1>
                                <p>Faça sua conta hoje mesmo e se junte a nós nessa jornada</p>
                                <button className="ghost" id="signUp" onClick={() => this.handleSignUpClick()}>Me
                                    cadastrar!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
            ;
    }
}

export default SignUpForm