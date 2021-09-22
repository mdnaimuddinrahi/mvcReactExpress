import React, { useEffect, useState } from 'react'
import PostServices from '../services/PostServices'
import Moment from 'react-moment';
import 'moment-timezone';
import { useHistory } from 'react-router';
export const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([])
    let history = useHistory()
    const getPost = async () => {
        const data = await PostServices.list()
        setListOfPosts(data)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="container text-center">

            <div className="row">

                { listOfPosts.map(post => (
                    <div className="card text-center col-2 col-md-3 m-2" key={ post.id } onClick={ () => { history.push(`/post/${post.id}`) } }>
                        <div className="card-header">
                            { post.username }
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ post.title }</h5>
                            <p className="card-text">{ post.postText }</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-muted">
                            <Moment fromNow>{ post.createdAt }</Moment>
                        </div>

                    </div>
                )) }

            </div>

        </div>
    )
}

export default Home