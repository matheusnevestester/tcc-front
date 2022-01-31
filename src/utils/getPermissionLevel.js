import axios from "axios";

export default async function getPermission(){
    console.log(localStorage.getItem('loggedUser'))
    axios.get('http://localhost:8082/api/v1/users/'+localStorage.getItem('loggedUser')+''
    ).then(({data}) => {
        console.log(data)
    })


}