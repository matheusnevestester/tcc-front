import React from 'react';
import '../../App.css';
import SignUpForm from "../Register/RegisterForm";
import Footer from "../Footer";

export default function SignUp() {
    return (
        <>
            <div className='sign-up'>
                <div className='center patternMargin'>
                    <SignUpForm/>
                </div>
            </div>
            <Footer />

        </>
    );
}
