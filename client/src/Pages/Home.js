import React, { useContext, useEffect, useState } from 'react'
import PostServices from '../services/PostServices'
import Moment from 'react-moment';
import 'moment-timezone';
import { useHistory } from 'react-router';
import { AuthContext } from '../helpers/AuthContext';
import Loading from './Loading'

export const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([])
    let history = useHistory()
    const { authState } = useContext(AuthContext)


    const onLike = async (data) => {
        const response = await PostServices.like(data)
        if (response.type == "success") {
            if (document.getElementById("post-" + data.id).classList.contains("text-primary")) {
                document.getElementById("post-" + data.id).classList.remove("text-primary")
            } else {
                console.log(`post-data.id`, data.id)
                document.getElementById("post-" + data.id).classList.remove('text-secondary')
                document.getElementById("post-" + data.id).classList.add("text-primary")
            }
            return getPost()

        }
    }

    const getPost = async () => {
        const data = await PostServices.list()
        setListOfPosts(data)
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken') == null && !authState.status) {
            history.push('/login')
        }
        getPost()
    }, [])

    let postList = null
    if (localStorage.getItem('accessToken') != null && !authState.status) {
        postList = <Loading />
    } else if (listOfPosts.length > 0) {
        postList = <div className="row">

            { listOfPosts && listOfPosts.map(post => (
                <div className="card text-center col-2 col-md-3 m-2" key={ post.id } >
                    <div className="card-header">
                        { post.username }
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{ post.title }</h5>
                        <p className="card-text">{ post.postText }</p>
                        <a className="btn btn-primary" onClick={ () => { history.push(`/post/${post.id}`) } }>view post</a>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col">
                                <Moment fromNow>{ post.createdAt }</Moment>
                            </div>
                            <div className="col text-end">
                                <a onClick={ () => onLike(post) }>
                                    { post.Likes.some(like => like.UserId === authState.id) ?
                                        <i className="fa fa-thumbs-up text-primary" id={ "post-" + post.id } aria-hidden="true"></i> :
                                        <i className="fa fa-thumbs-up text-secondary" id={ "post-" + post.id } aria-hidden="true"></i>
                                    }

                                </a> { post.Likes.length }
                            </div>
                        </div>
                    </div>

                </div>
            )) }

        </div>
    }
    return (
        <div className="container text-center">
            { postList }

        </div>
    )
}

export default Home