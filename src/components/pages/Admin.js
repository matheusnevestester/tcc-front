import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import NewBookForm from "../AdminBoard/NewBookForm";
import NewCategoryForm from "../AdminBoard/NewCategoryForm";
import NewGroupForm from "../AdminBoard/NewGroupForm";

export default function Admin() {
    return (
        <>
            <NewBookForm/>
            <NewCategoryForm/>
            <NewGroupForm/>
            <Footer/>
        </>
    );
}
