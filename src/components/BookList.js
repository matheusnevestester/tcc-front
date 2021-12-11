import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'
import CardItem from "./CardItem";
import BookItem from "./BookItem";
import CategoryItem from "./CategoryItem";

const axios = require('axios');

export default function BookList() {

    const [categories, setCategories] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories'
        ).then(({data}) => {
            console.log(data)
            setCategories(data.data);
        })
/*        if (categories.length > 0) {
            categories.map((category) => (
                axios.get('http://localhost:8081/api/v1/books/' + category.id + '/category', {}).then(({data}) => {
                    console.log(data)
                    setBooks(data.data);
                })))*/

        /*}*/
        // eslint-disable-next-line
    }, [])
    console.log(categories)

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/books').then(({data}) => {
            console.log(data)
            setBooks(data.data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(books)

    function getBooks(categoryId) {

    }

    return (
        <div className='cards'>
            <h1>Nossos livros disponíveis!</h1>
            <div className='cards__wrapper'>
                {categories?.map((category) => (
                    <ul>
                        <h2>{category.name}</h2>
                        <ul className='cards__items'>
                            {books?.map((book) => (
                                <CategoryItem
                                    src='images/book-tcc.jpg'
                                    text={book.title}
                                    path='/books-list'
                                />
                            ))}
                        </ul>
                    </ul>
                ))}
            </div>
        </div>
    );
}

