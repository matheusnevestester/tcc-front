import React from 'react';
import '../../App.css';
import '../Jitsi.css'
import Footer from "../Footer";
import JitsiComponent from "../Jitsi";

export default function GroupCall() {
    return (
        <>
            <div className='jitsi-container shadow'>
                <JitsiComponent/>
                <Footer/>
            </div>
        </>
    );
}
