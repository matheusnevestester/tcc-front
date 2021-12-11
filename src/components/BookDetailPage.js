import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'
import './DetailPage.css'
import CategoryItem from "./CategoryItem";

const axios = require('axios');

export default function BookDetailPage() {

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
        <div className="detailPage">
            <div>
                <button>Reserve agora!</button>
            </div>
            <div>
                <h1>O Hobbit</h1>
            </div>
            <div className="detailPageImg">
                <img src='images/book-tcc.jpg' alt="book">
                </img>
            </div>
            <div className="detailPageDescription">
                <h2>Descrição:</h2>
                <a> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br></br>
                </a>
            </div>
        </div>
    );
}

