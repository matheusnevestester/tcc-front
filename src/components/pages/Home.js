import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SignUpForm from "../Register/RegisterForm";
import JitsiComponent from "../Jitsi";

function Home() {
    return (
        <>
            <div className="background-gif">
                <HeroSection/>
                <div className='patternPadding shadow'>
                    <SignUpForm/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
