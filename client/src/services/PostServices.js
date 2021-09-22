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
    const res = await axios
        .post(url, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error
        })
}

export default PostServices;

// ItemServices.list = async params => {
//     const urlList = "/api/items";
//     const res = await axios
//         .get(urlList, { params: params })
//         .then(response => {
//             return response.data.data.data;
//         })
//         .catch(error => {
//             return error;
//         });
//     return res;
// };
// ItemServices.save = async data => {
//     let urlSave = "/api/items";
//     if (data.get("id")) {
//         urlSave = "/api/items/" + data.get("id") + "?_method=PUT";
//         const res = await axios
//             .post(urlSave, data)
//             .then(response => {
//                 $.notify({ message: "Item Updated" }, { type: "success" });
//                 return response.data;
//             })
//             .catch(error => {
//                 return [];
//             });
//         return res;
//     } else {
//         const res = await axios
//             .post(urlSave, data)
//             .then(response => {
//                 $.notify({ message: "Item Created" }, { type: "success" });
//                 return response.data;
//             })
//             .catch(error => {
//                 return [];
//             });
//         return res;
//     }
// };