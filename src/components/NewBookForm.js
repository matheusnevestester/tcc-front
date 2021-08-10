import React, {useRef, useState, useEffect} from "react";
import './AdminForms.css'

const axios = require('axios');

const initialState = {
    bookingName: '',
    bookingType: '',
    error: false,
    loading: false,
    articleId: null,
}

const NewBookForm = () => {

    const [state, setState] = useState(initialState);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, loading: true})
    }

    const handleChangeName = ({target}) => setState({...state, bookingName: target.value})


    useEffect(() => {
        if (!state.loading) return
        const getArticleId = async () => {
            try {
                const response = await axios.post('https://reqres.in/api/articles', {title: state.bookingName})
                setState({...state, articleId: response.data.id, loading: false})
            } catch (e) {
                setState({...state, error: true, loading: false})
            }
        }
        getArticleId()
    }, [state.loading])

    console.log(state)

    return (
        <>
            <div className="admin-container center">
                {state.articleId && <p>{state.articleId}</p>}
                <form className="admin-form">
                    <h1>Cadastrar novo livro!</h1>
                    <input onChange={handleChangeName} type="name" placeholder="Nome"/>
                    <input type="type" placeholder="Tipo"/>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewBookForm