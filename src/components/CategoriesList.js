import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'

import CategoryItem from "./CategoryItem";

const axios = require('axios');

export default function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories').then(({data}) => {
            console.log(data)
            setCategories(data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(categories)

    return (
        <div className='cards'>
            <h1>Nossos livros disponíveis!</h1>
            <div className='cards__wrapper'>
                <h1>Categorias</h1>
                <ul className='cards__items'>
                    {categories?.map((category) => (
                        <CategoryItem
                            src='images/book-tcc.jpg'
                            text={category.name}
                            path='/books-list'
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

