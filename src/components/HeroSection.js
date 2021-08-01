import React, {useRef} from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import {Link} from "react-router-dom";

class HeroSection extends React.Component {
    handleScroll() {
        const container = document.getElementById('container');
        container.scrollIntoView({behavior: 'smooth', block: "center"})
    }

    render() {

        return (
            <div className='hero-container'>
                <video src='/videos/video-1.mp4' autoPlay loop muted/>
                <h1>UMA NOVA PÁGINA PARA O SEU NEGÓCIO</h1>
                <p className='text-align '>Gerencie sua biblioteca como nunca antes</p>
                <div className='hero-btns'>
                    <button className="ghost margins btn-mobile width" id="signUp"
                            onClick={() => this.handleScroll()}>Comece agora
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
