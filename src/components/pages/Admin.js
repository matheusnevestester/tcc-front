import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import NewBookForm from "../AdminBoard/NewBookForm";

export default function Admin() {
    return (
        <>
            <NewBookForm/>
            <Footer/>
        </>
    );
}
