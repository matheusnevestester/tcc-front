import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SignUpForm from "../RegisterForm";

function Home() {
    return (
        <>
            <HeroSection/>
            <div className='center patternPadding'>
                <SignUpForm/>
            </div>

            <Footer/>
        </>
    );
}

export default Home;
