
import axios from 'axios'
import { toast } from 'react-toastify'

const CommentServices = {}

CommentServices.list = async (data) => {
    console.log(`data id :: `, data)
    let url = "http://127.0.0.1:3080/comments/" + data
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

CommentServices.store = async (data) => {
    let url = "http://127.0.0.1:3080/comments/"
    const res = await axios
        .post(url, data, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
        .then(response => {
            if (response.data.error) {
                toast.error('You are not Logged In!', {
                    theme: "colored"
                })
            } else {
                toast.success("Your Comment saved !!!", {
                    theme: "colored",
                    pauseOnHover: false
                })
            }

            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

CommentServices.update = async (data) => {
    let url = "http://127.0.0.1:3080/comments/" + data.id
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

CommentServices.delete = async (data) => {
    let url = "http://127.0.0.1:3080/comments/" + data.id
    const res = await axios
        .delete(url, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
        .then(response => {
            toast.error(response.data.message, {
                theme: "colored",
                pauseOnHover: false
            })
            return response.data
        })
        .catch(error => {
            console.log(`error`, error)
            return error
        })
    return res
}

CommentServices.details = async (data) => {
    let url = "http://127.0.0.1:3080/comments/" + data.id
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



export default CommentServices

