import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
import {useHistory} from "react-router-dom";
const axios = require('axios');

const bookInitialState = {
    id: '',
    title: '',
    author: '',
    description: '',
    image: '',
    registerNumber: '',
    available: '',
    BookCategory:[]
}

const UpdateBookForm = () => {
    const history = useHistory();

    const [state, setState] = useState(bookInitialState);
    const [bookUsed, setBookUsed] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, editBookBtn: true})
    }

    const handleChangeName = ({target}) => setState({...state, title: target.value})
    const handleChangeAuthor = ({target}) => setState({...state, author: target.value})
    const handleChangeRegisterNumber = ({target}) => setState({...state, registerNumber: target.value})
    const handleChangeCategory = ({target}) => setState({...state, bookingCategory: target.value})
    const handleChangeDescription = ({target}) => setState({...state, description: target.value})
    const handleChangeImage = ({target}) => setState({...state, image: target.value})

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories'
        ).then(({data}) => {
            setCategories(data);
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/book/'+history.location.state.book+''
        ).then(({data}) => {
            setState(data);
        })
    }, [])



        /* useEffect(() => {
             if (!state.sendNewBkg) return
             const signInClick = async () => {
                 const config = {
                     headers: {
                         'Content-Type': 'application/json',
                     }
                 }
                 try {
                     const response = await axios.post('http://localhost:8081/api/v1/books/', {
                         title: state.bookingName,
                         author: state.bookingAuthor,
                         registerNumber: state.bookingNumber,
                         categoriesId: state.bookingCategory

                     }, config)
                     console.log(response)
                     document.cookie = 'token=' + response.data.token
                     setState({...state, loginSuccess: true, sendNewBkg: false})
                 } catch (e) {
                     setState({...state, error: true})
                     setTimeout(() =>
                             setState({...state, error: false, sendNewBkg: false}),
                         2000)
                 }
             }
         }, [state.editBookBtn])
     */
    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    <h1>Editar Livro</h1>
                    <input onChange={handleChangeName} id="bookTitle" type="name" placeholder="Nome" value={state.title}/>
                    <input  onChange={handleChangeAuthor} type="author" placeholder="Autor" value={state.author}/>
                    <input onChange={handleChangeRegisterNumber} type="registerNumber" placeholder="Número de registro" value={state.registerNumber}/>
                    <select onChange={handleChangeCategory} className= "select" name="categories" >
                        <option value ="empty">----</option>
                        {categories.map((categoryItem =>(
                            <option value={categoryItem.id}>{categoryItem.name}</option>
                        )))}
                    </select>
                    <input  onChange={handleChangeDescription} type="description" placeholder="Descrição" value={state.description}/>
                    <input  onChange={handleChangeImage} type="book-image" placeholder="Imagem" value={state.image}/>
                    <button onClick={handleClickButton}>Editar</button>
                </form>
            </div>
        </>
    )
}

export default UpdateBookForm