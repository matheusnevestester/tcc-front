import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SignUpForm from "../RegisterForm";
import JitsiComponent from "../Jitsi";

function Home() {
    return (
        <>
            <HeroSection/>
            <div className=' patternPadding shadow'>
                <SignUpForm/>
            </div>
            {/*<JitsiComponent/>*/}

            <Footer/>
        </>
    );
}

export default Home;
