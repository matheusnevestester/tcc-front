import React, {useRef} from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import {Link} from "react-router-dom";
import getAuthToken from "../utils/getToken";

class HeroSection extends React.Component {

    handleScroll() {
        const container = document.getElementById('container');
        container.scrollIntoView({behavior: 'smooth', block: "center"})
    }
    handleScrollMobile() {
        const container = document.getElementsByClassName('container-mobile')[0];
        container.scrollIntoView({behavior: 'smooth', block: "center"})
    }
    render() {

        return (
            <div className='hero-container'>
                <h1>UMA NOVA PÁGINA PARA O SEU NEGÓCIO</h1>
                <p>Gerencie sua biblioteca como nunca antes</p>
                <div className='hero-btns'>
                    <button className="ghost margins btn-desktop width" id="signUp"
                            onClick={() => this.handleScroll()}>Comece agora
                    </button>
                    <button className="ghost margins btn-mobile btn-mobile-only width" id="signUpMobile"
                            onClick={() => this.handleScrollMobile()}>Comece agora
                    </button>
                    <Link to='/services'>
                        <button className="ghost margins btn-mobile width" id="signUp"
                                onClick={() => console.log('test button2')}>veja nossos
                            serviços
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HeroSection;
