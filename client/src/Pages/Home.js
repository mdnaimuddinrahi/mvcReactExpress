import React, { useEffect, useState } from 'react'
import PostServices from '../services/PostServices'

export const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([])

    const getPost = async () => {
        const data = await PostServices.list()
        setListOfPosts(data)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="container">
            <table className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
                <thead className="thead-inverse|thead-default">
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    { listOfPosts.map(post => (
                        <tr key={ post.id }>
                            <td scope="row">{ post.username }</td>
                            <td>{ post.title }</td>
                            <td>{ post.postText }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default Home