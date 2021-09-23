import axios from 'axios'

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
            return response.data
        })
        .catch(error => {
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