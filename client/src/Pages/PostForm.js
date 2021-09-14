import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import PostServices from '../services/PostServices'

export const PostForm = () => {

    const initialValues = {
        title: "",
        postText: "",
        username: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = async (data) => {
        const savePost = await PostServices.post(data)
        console.log(`savePost`, savePost)
    }

    return (
        <div className="mt-3 container col-6 p-3 border border-primary rounded">
            <div className="createPostPage">
                <h4>Create Post</h4>
                <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="inputTitle" className="form-label">Title</label>
                            <Field id="inputTitle" className="form-control" name="title" placeholder="(Expample.Title....)" />
                            <ErrorMessage name="title" component="span" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="postTag" className="form-label">Post:</label>
                            <Field id="postTag" className="form-control" name="postText" placeholder="(Expample.Post....)" />
                            <ErrorMessage name="postText" component="span" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name:</label>
                            <Field id="username" className="form-control" name="username" placeholder="(Expample.username....)" />
                            <ErrorMessage name="username" component="span" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default PostForm
