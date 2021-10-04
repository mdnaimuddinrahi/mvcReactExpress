import axios from "axios"
import { toast } from "react-toastify"

const PostServices = {}

PostServices.list = async () => {
    let url = "http://127.0.0.1:3080/posts"
    const res = await axios
        .get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res;
}

PostServices.details = async (id) => {
    console.log(`id`, id)
    let url = "http://127.0.0.1:3080/posts/byId/"
    const res = await axios
        .get(url + id)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

PostServices.post = async (data) => {
    let url = "http://127.0.0.1:3080/posts"
    const res = await axios
        .post(url, data, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
        .then(response => {
            console.log(`response in PostServices::> `, response.data)
            toast.success(response.data.message, {
                theme: "colored"
            })
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}


PostServices.like = async (data) => {
    let url = "http://127.0.0.1:3080/likes"
    const res = await axios
        .post(url, { PostId: data.id }, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
        .then(response => {
            console.log(`response in PostServices likes::> `, response.data)
            toast.success(response.data.message, {
                theme: "colored"
            })
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}

export default PostServices