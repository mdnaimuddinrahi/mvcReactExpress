import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import UserServices from '../services/UserServices'

const Registration = () => {

    const initialValues = {
        username: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string().min(1).max(8).required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = async (data) => {
        console.log('onSubmit', data)
        const user = await UserServices.store(data)

    }

    return (
        <div>
            <h1>Registration</h1>
            <div className="mt-3 container col-6 p-3 border border-primary rounded">
                <div className="createPostPage">
                    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">User Name:</label>
                                <Field id="username" className="form-control" name="username" placeholder="(Expample.username....)" />
                                <ErrorMessage name="username" component="span" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <Field id="password" className="form-control" name="password" placeholder="password...." />
                                <ErrorMessage name="password" component="span" className="text-danger" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Registration
