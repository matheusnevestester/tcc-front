import React, {useRef, useState, useEffect} from "react";
import './Register/RegisterForm.css'
import CardItem from "./CardItem";
import BookItem from "./BookItem";
import CategoryItem from "./CategoryItem";

const axios = require('axios');

export default function ConfereceList() {

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/v1/conferences/').then(({data}) => {
            console.log(data)
            setConferences(data.data);
        })
        // eslint-disable-next-line
    }, [])
    console.log(conferences)

    return (
        <div className='cards'>
            <h1>Próximas palestas!</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {conferences?.map((conference) => (
                        <CardItem
                            src='images/book-tcc.jpg'
                            text={conference.subject}
                            path='/books-list'
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

