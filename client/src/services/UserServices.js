import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HOSTING } from "./Hosting"

const UserServices = {}

UserServices.list = async (data) => {
    let url = HOSTING.URL + "auth"
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
    let url = HOSTING.URL + "auth"
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
    let url = HOSTING.URL + "auth/login"
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

                localStorage.setItem("accessToken", response.data.token)
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
    let url = HOSTING.URL + "auth" + data.id
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

UserServices.auth = async (data) => {
    let url = HOSTING.URL + "auth/auth"
    const res = await axios
        .get(url, HOSTING.TOKEN)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

UserServices.details = async (data) => {
    let url = HOSTING.URL + "auth" + data.id
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

UserServices.findById = async (id) => {
    let url = HOSTING.URL + "auth/basicinfo/" + id
    const res = await axios
        .get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

export default UserServices