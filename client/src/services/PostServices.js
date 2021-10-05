import axios from "axios"
import { toast } from "react-toastify"
import { HOSTING, ToastSuccess } from "./Hosting"

const PostServices = {}


PostServices.list = async () => {
    let url = HOSTING.URL + "posts"
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
    let url = HOSTING.URL + "posts/byId/"
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
    let url = HOSTING.URL + "posts"
    const res = await axios
        .post(url, data, HOSTING.TOKEN)
        .then(response => {
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
    let url = HOSTING.URL + "likes"
    const res = await axios
        .post(url, { PostId: data.id }, HOSTING.TOKEN)
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

PostServices.delete = async (data) => {
    let url = HOSTING.URL + "posts/" + data.id
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


PostServices.byUserId = async (userId) => {
    const url = HOSTING.URL + 'posts/byuserId/' + userId
    const res = await axios
        .get(url)
        .then(response => {
            console.log(`PostServices.byUserId`, response)
            return response.data
        })
        .catch(error => {
            return error
        })
    return res
}


PostServices.update = async (params, data) => {
    const url = HOSTING.URL + 'posts/' + params
    const res = await axios
        .put(url, data, HOSTING.TOKEN)
        .then(response => {
            console.log(`response update:: `, response.data)
            toast.success(response.data.message, {
                theme: "colored"
            })
            return response.data
        })
        .catch(error => {
            console.log(`error update`, error)
            return error
        })
    return res
}
export default PostServices