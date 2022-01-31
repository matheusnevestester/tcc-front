import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
const axios = require('axios');

const initialState = {
    bookingName: '',
    bookingAuthor: '',
    bookingNumber: '',
    bookingCategory: '',
    bookingDescription: '',
    bookingImage: '',
    error: false,
    sendNewBkg: false,
    articleId: null,
    newBookSuccess: false,
    newBookFailure: false
}

const NewBookForm = () => {

    const [state, setState] = useState(initialState);
    const [categories, setCategories] = useState([]);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, sendNewBkg: true})
    }

    const handleChangeName = ({target}) => setState({...state, bookingName: target.value})
    const handleChangeAuthor = ({target}) => setState({...state, bookingAuthor: target.value})
    const handleChangeRegisterNumber = ({target}) => setState({...state, bookingNumber: target.value})
    const handleChangeCategory = ({target}) => setState({...state, bookingCategory: target.value})
    const handleChangeDescription = ({target}) => setState({...state, bookingDescription: target.value})
    const handleChangeImage = ({target}) => setState({...state, bookingImage: target.value})

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories'
        ).then(({data}) => {
            setCategories(data);
        })
    }, [])

    useEffect(() => {
        if (!state.sendNewBkg) return
        const registerBook = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            try {
                const response = await axios.post('http://localhost:8081/api/v1/book', {
                    title: state.bookingName,
                    author: state.bookingAuthor,
                    registerNumber: state.bookingNumber,
                    categoriesId: state.bookingCategory

                }, config)
                console.log(response)
                setState({...state, newBookSuccess: true, sendNewBkg: false})
            } catch (e) {
                setState({...state, newBookFailure: true})
                setTimeout(() =>
                        setState({...state, newBookFailure: false, sendNewBkg: false}),
                    2000)
            }
        }
        registerBook()
    }, [state.sendNewBkg])

    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    {state.newBookSuccess && <div className="alert-succes">
                        <span className="alert-closebtn">&times;</span>
                        Cadastro realizado com sucesso
                    </div>}
                    {state.newBookFailure && <div className="alert">
                        <span className="alert-closebtn">&times;</span>
                        Oops parece que algo deu errado
                    </div>}
                    <h1>Cadastrar novo livro!</h1>
                    <input onChange={handleChangeName} type="name" placeholder="Nome"/>
                    <input  onChange={handleChangeAuthor} type="author" placeholder="Autor"/>
                    <input onChange={handleChangeRegisterNumber} type="registerNumber" placeholder="Número de registro"/>
                    <select onChange={handleChangeCategory} className= "select" name="categories" >
                        <option value ="empty">----</option>
                        {categories.map((categoryItem =>(
                            <option value={categoryItem.id}>{categoryItem.name}</option>
                        )))}
                    </select>
                    <input  onChange={handleChangeDescription} type="description" placeholder="Descrição"/>
                    <input  onChange={handleChangeImage} type="book-image" placeholder="Imagem"/>
                    <button onClick={handleClickButton}>Cadastrar</button>
                </form>

            </div>
        </>
    )
}

export default NewBookForm