import { toast } from "react-toastify"

export const HOSTING = {
    URL: 'http://127.0.0.1:3080/',
    TOKEN: {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }
}

export const ToastSuccess = (data) => {
    toast.success(data.message, {
        theme: "colored"
    })
}




