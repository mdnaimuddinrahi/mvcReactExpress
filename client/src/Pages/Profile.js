import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostServices from '../services/PostServices'
import UserServices from '../services/UserServices'
import Moment from 'react-moment'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'

const Profile = () => {
    let { id } = useParams()
    const [username, setUsername] = useState("")
    const [postsList, setPostsList] = useState({})
    const history = useHistory()

    useEffect(() => {
        getUser()
        getPosts()
    }, [])

    const getUser = async () => {
        const user = await UserServices.findById(id)
        console.log(`user details:: `, user.username)
        setUsername(user.username)
    }

    const getPosts = async () => {
        const posts = await PostServices.byUserId(id)
        console.log(`getPosts posts`, posts)
        setPostsList(posts)
    }

    const deletePost = async (data) => {
        const post = await PostServices.delete(data)
        if (post.type == "success") {
            return getPosts()
        }
    }

    let listofPosts = null

    console.log(`postsList`, postsList)

    listofPosts = postsList.length > 0 && postsList.map(post => {
        return <div className="card mt-3">
            <div className="card-header bg-primary text-white">
                <div className="row">
                    <div className="col">
                        Created At <Moment fromNow>{ post.createdAt }</Moment>
                    </div>
                    <div className="col">
                        <div className="text-end">
                            <p onClick={ () => deletePost(post) }><i className="fa fa-trash" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.postText }</p>
                <Link to={ "/post/" + post.id } className="btn btn-primary">Go Details</Link>
            </div>
            <div className="card-footer">
                <div className="text-end"><i className="fa fa-thumbs-up" aria-hidden="true"></i> { post.Likes.length }</div>
            </div>
        </div>
    })

    return (
        <div>
            <div className="header mt-3">
                <h1>Profile Page { username }</h1>
            </div>
            <div className="text-start m-3">
                <h2>All Posts Created by you</h2>
            </div>
            <div className="content">
                <div className="container col-6">
                    { listofPosts }
                </div>
            </div>
        </div>
    )
}

export default Profile
