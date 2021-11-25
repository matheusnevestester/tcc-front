import React, {useRef, useState, useEffect} from "react";
import './AdminForms.css'
import '../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    bookingName: '',
    bookingAuthor: '',
    bookingNumber: '',
    bookingCategory: '',
    error: false,
    sendNewBkg: false,
    articleId: null,
}

const NewBookForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewBkg: true})
    }

    const handleChangeName = ({target}) => setState({...state, bookingName: target.value})
    const handleChangeAuthor = ({target}) => setState({...state, bookingAuthor: target.value})
    const handleChangeRegisterNumber = ({target}) => setState({...state, bookingNumber: target.value})
    const handleChangeCategory = ({target}) => setState({...state, bookingCategory: target.value})


    useEffect(() => {
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
        signInClick()
    }, [state.sendNewBkg])

    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    <h1>Cadastrar novo livro!</h1>
                    <input onChange={handleChangeName} type="name" placeholder="Nome"/>
                    <input  onChange={handleChangeAuthor} type="author" placeholder="Autor"/>
                    <input onChange={handleChangeRegisterNumber} type="registerNumber" placeholder="Número de registro"/>
                    <select onChange={handleChangeCategory} className= "select" name="categories" >
                        <option value="1">Categoria 1</option>
                        <option value="2">Categoria 2</option>
                    </select>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewBookForm