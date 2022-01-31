import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import NewBookForm from "../AdminBoard/Book/NewBookForm";
import NewCategoryForm from "../AdminBoard/Book/NewCategoryForm";
import NewGroupForm from "../AdminBoard/Users/NewGroupForm";
import BookListAdmin from "../AdminBoard/Book/BookListAdmin";
import CategoriesList from "../CategoriesList";
import CategoryListAdmin from "../AdminBoard/Book/CategoryListAdmin";
import Tab from "../AdminBoard/Tab/Tab";

export default function AdminBooks() {
    return (
        <>
            <Tab/>
            <Footer/>
        </>
    );
}
