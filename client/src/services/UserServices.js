import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserServices = {}

UserServices.list = async (data) => {
    let url = "http://127.0.0.1:3080/auth"
    const res = await axios
        .get(url, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

UserServices.store = async (data) => {
    let url = "http://127.0.0.1:3080/auth"
    const res = await axios
        .post(url, data)
        .then(response => {
            toast.success("User Create Successfully", {
                theme: "colored"
            })
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

UserServices.login = async (data) => {
    let url = "http://127.0.0.1:3080/auth/login"
    console.log(`data`, data)
    const res = await axios
        .post(url, data)
        .then(response => {
            console.log(`response userservice: `, response)
            if (response.data.error) {
                toast.error(response.data.error, {
                    theme: "colored"
                })
            } else {
                toast.success("YOU LOGGED IN !!!", {
                    theme: "colored"
                })
                console.log(`response.data`, response.data)
                sessionStorage.setItem("accessToken", response.data)
            }
            return response.data
        })
        .catch(error => {
            console.log(`error userservices`, error)
            return error
        })
    return res
}

UserServices.update = async (data) => {
    let url = "http://127.0.0.1:3080/auth" + data.id
    const res = await axios
        .put(url, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

UserServices.delete = async (data) => {
    let url = "http://127.0.0.1:3080/auth" + data.id
    const res = await axios
        .delete(url, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

UserServices.details = async (data) => {
    let url = "http://127.0.0.1:3080/auth" + data.id
    const res = await axios
        .get(url, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}



export default UserServices