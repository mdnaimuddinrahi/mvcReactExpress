
import axios from 'axios'
import { toast } from 'react-toastify'
import { HOSTING } from "./Hosting"

const CommentServices = {}

CommentServices.list = async (data) => {
    console.log(`data id :: `, data)
    let url = HOSTING.URL + "comments/" + data
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
    let url = HOSTING.URL + "comments/"
    console.log(`comment data`, data)
    const res = await axios
        .post(url, data, HOSTING.TOKEN)
        .then(response => {
            if (response.data.error) {
                toast.error('You are not Logged In!', {
                    theme: "colored"
                })
            } else {
                console.log(`response.data`, response.data)
                toast.success(response.data.message, {
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
    let url = HOSTING.URL + "comments/" + data.id
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
    let url = HOSTING.URL + "comments/" + data.id
    const res = await axios
        .delete(url, HOSTING.TOKEN)
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
    let url = HOSTING.URL + "comments/" + data.id
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

