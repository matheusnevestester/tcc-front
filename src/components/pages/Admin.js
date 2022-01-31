import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import NewBookForm from "../AdminBoard/Book/NewBookForm";
import NewCategoryForm from "../AdminBoard/Book/NewCategoryForm";
import NewGroupForm from "../AdminBoard/Users/NewGroupForm";
import Tab from "../AdminBoard/Tab/Tab";

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
