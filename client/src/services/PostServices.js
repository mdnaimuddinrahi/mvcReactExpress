import axios from "axios"

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
    // console.log(`localStorage.getItem("accessToken")`, localStorage.getItem("accessToken"))
    // return url
    const res = await axios
        .post(url, data, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
        .then(response => {
            return response
        })
        .catch(error => {
            return error
        })
}

export default PostServices