import React, {useRef, useState, useEffect} from "react";
import '../AdminForms.css'
import '../../Register/RegisterForm.css'
import {useHistory} from "react-router-dom";
const axios = require('axios');

const categoryInitialState = {
    id: '',
    name: '',
    description: '',
    image: ''
}

const UpdateCategoryForm = () => {
    const history = useHistory();

    const [state, setState] = useState(categoryInitialState);
    const [categories, setCategories] = useState([]);

    const handleClickButton = (event) => {
        event.preventDefault();
        setState({...state, editBookBtn: true})
    }

    const handleChangeName = ({target}) => setState({...state, name: target.value})
    const handleChangeDescription = ({target}) => setState({...state, description: target.value})
    const handleChangeImage = ({target}) => setState({...state, image: target.value})

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories/'+history.location.state.category+''
        ).then(({data}) => {
            setState(data);
        })
    }, [])
    console.log(state)

    return (
        <>
            <div className="admin-container center">
                <form className="admin-form">
                    <h1>Editar Categoria</h1>
                    <input onChange={handleChangeName} id="categoryTitle" type="name" placeholder="Nome" value={state.name}/>
                    <input  onChange={handleChangeDescription} type="description" placeholder="Descrição" value={state.description}/>
                    <input  onChange={handleChangeImage} type="category-image" placeholder="Imagem" value={state.image}/>
                    <button onClick={handleClickButton}>Editar</button>
                </form>
            </div>
        </>
    )
}

export default UpdateCategoryForm