import React, { useEffect, useState } from 'react'
import PostServices from '../services/PostServices'
import Moment from 'react-moment';
import 'moment-timezone';

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
        <div className="container text-center">

            <div className="row">

                { listOfPosts.map(post => (
                    <div class="card text-center col-2 col-md-3 m-2" key={ post.id }>
                        <div class="card-header">
                            { post.username }
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{ post.title }</h5>
                            <p class="card-text">{ post.postText }</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                            <Moment fromNow>{ post.createdAt }</Moment>
                        </div>

                    </div>
                )) }

            </div>

        </div>
    )
}

export default Home