import React, {useRef, useState, useEffect} from "react";
import '../Register/RegisterForm.css'

import BookItem from "./BookItem";
const axios = require('axios');

const initialState = {
    searchAction: false
}
export default function BookList() {
    const [state, setState] = useState(initialState);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [categories, setCategories] = useState([]);
    const [books, setBooks] = useState([]);
    let [filteredBooks, setFilteredBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState(false)


    useEffect( () => {
        axios.get('http://localhost:8081/api/v1/categories'
        ).then(({data}) => {
            console.log(data)
            setCategories(data);
        })
    }, [])
    console.log(categories)
    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book').then(({data}) => {
            console.log(data)
            setBooks(data);
            console.log(data)
        })

    }, [])
    console.log(books)


    let arrayOfArrays = separateCards(books)
    /*   let size = 3;
       let arrayOfArrays = [];
       let totalItemsMissing = books.length
       for (let i = 0; i < books.length; i += size) {
           if(totalItemsMissing >= size){
               arrayOfArrays.push(books.slice(i, i + size));
               totalItemsMissing = totalItemsMissing - size
           }
       }
       console.log(arrayOfArrays);
       console.log(books)*/

    const handleChangeCategory = ({target}) => setCategoryFilter({...categoryFilter, bookingCategory: target.value})

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book?categ=' + categoryFilter.bookingCategory + '').then(({data}) => {
            console.log(data)
            setFilteredBooks(data);
            setState({...state, searchAction: true})
            console.log(data.length)
            if(data.length > 0){
                setSearchBooks(true)
            }else{
                setSearchBooks(false)
            }
            console.log(searchBooks)
        })
        console.log(categoryFilter)
        // eslint-disable-next-line
    }, [categoryFilter])

    let arrayOfFilteredBooks = separateCards(filteredBooks)



    function separateCards(cardsArray) {
        let size = 3;
        let arrayOfArrays = [];
        console.log(cardsArray)
        let totalItemsMissing = cardsArray.length
        for (let i = 0; i < cardsArray.length; i += size) {
            arrayOfArrays.push(cardsArray.slice(i, i + size));
            totalItemsMissing = totalItemsMissing - size

        }
        return arrayOfArrays
    }

    return (
        <div className='cards'>

            {/*<div><input placeholder="Comece sua pesquisa aqui!"></input>*/}
            {/*    <button>Pesquisar</button>*/}
            {/*</div>*/}
            <h1>Pesquise aqui!</h1>
            <div className='cards__wrapper'>
                <div>
                    <h3>Pesquisa por nome</h3>
                    <input placeholder="Escreva aqui o nome do livro!"></input>
                </div>
                <h3>Filtro por categorias</h3>
                <select onChange={handleChangeCategory} className="select selectHalfSize" name="categories">
                    <option value="empty">----</option>
                    {categories.map((categoryItem => (
                        <option value={categoryItem.id}>{categoryItem.name}</option>
                    )))}
                </select>
                {state.searchAction && <ul>
                    <h1>Resultados</h1>
                    {!searchBooks && <h3>Oops! Não encontramos nenhum livro correspondente</h3>}
                    {searchBooks && <ul >
                        {arrayOfFilteredBooks.map((smallerArray) => (
                            <ul className='cards__items'>
                                {smallerArray.map((book) => (
                                    <BookItem
                                        src={"images/books/" + book.image + ".jpg"}
                                        text={book.title}
                                        path='/books-list'
                                        bookingId={book.id}
                                    />
                                ))}
                            </ul>
                        ))}
                    </ul>}
                </ul>}
            </div>
            <div>
                <h1>Nossos highlights!</h1>
            </div>
            <div className='cards__wrapper'>
                <ul>
                    {arrayOfArrays.map((smallerArray) => (
                        <ul className='cards__items'>
                            {smallerArray.map((book) => (
                                <BookItem
                                    src={"images/books/" + book.image + ".jpg"}
                                    text={book.title}
                                    path='/books-list'
                                    bookingId={book.id}
                                />
                            ))}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
}

