import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'
import CardItem from "./CardItem";
import BookItem from "./BookItem";
import CategoryItem from "./CategoryItem";

const axios = require('axios');

export default function CategoriesList() {

    const [categories, setCategories] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/mgr/api/v1/categories',{
            headers:{
                'Authorization': 'eyJhbGciOiJIUzI1NiIsImtpZCI6Ik85QTFDQmVEeVR0aTRYS2Npd1B0Mmo3NnJKaEZtTkE1IiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdXVpZCI6ImI1NDgxMzI4LTEwZDUtNDk5Ny1iOGIzLTBjODk0ZGZkYmQ5MCIsImF1dGhvcml6ZWQiOnRydWUsImVtYWlsIjoibWF0aGV1bkBob3RtYWlsLmNvbSIsImV4cCI6MTYzNzc4ODkyMiwiaXNzIjoiTzlBMUNCZUR5VHRpNFhLY2l3UHQyajc2ckpoRm1OQTUifQ.H_RG85c0XIZ-ngV1draRpenpItOhe5BY-VH2vdoERz4',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(({data}) => {
            console.log(data)
            setCategories(data.data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(categories)

    // useEffect(() => {
    //     axios.get('http://localhost:8081/api/v1/books/').then(({data}) => {
    //         console.log(data)
    //         setBooks(data.data);
    //     })
    //     // eslint-disable-next-line
    // }, [])
    // console.log(books)

    function getBooks(categoryId){
        axios.get('http://localhost:8000/mgr/api/v1/books?categoryId='+categoryId+'',{
            headers:{
                'Authorization': 'eyJhbGciOiJIUzI1NiIsImtpZCI6Ik85QTFDQmVEeVR0aTRYS2Npd1B0Mmo3NnJKaEZtTkE1IiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdXVpZCI6ImI1NDgxMzI4LTEwZDUtNDk5Ny1iOGIzLTBjODk0ZGZkYmQ5MCIsImF1dGhvcml6ZWQiOnRydWUsImVtYWlsIjoibWF0aGV1bkBob3RtYWlsLmNvbSIsImV4cCI6MTYzNzc4ODkyMiwiaXNzIjoiTzlBMUNCZUR5VHRpNFhLY2l3UHQyajc2ckpoRm1OQTUifQ.H_RG85c0XIZ-ngV1draRpenpItOhe5BY-VH2vdoERz4',
                'Access-Control-Allow-Headers': 'test'
            }
        } ).then(({data}) => {
            console.log(data)
            setBooks(data.data);
        })
        console.log(books)
    }

    return (
        <div className='cards'>
            <h1>Nossos livros disponíveis!</h1>
            <div className='cards__wrapper'>
                <h1>Categorias</h1>
                    {categories?.map((category) => (
                        <ul>
                            {getBooks(category.id)}
                            <br></br>
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

