import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostServices from '../services/PostServices'
import UserServices from '../services/UserServices'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const Profile = () => {
    let { id } = useParams()
    const [username, setUsername] = useState("")
    const [postsList, setPostsList] = useState({})

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

    const updatePost = async (post, type) => {
        let newData = prompt("Update your post " + type + ": ", post.data)
        const response = await PostServices.update(type, { newData: newData, id: post.id })
        if (response.type == "success") {
            return getPosts()
        }

    }

    let listofPosts = null

    listofPosts = postsList.length > 0 && postsList.map(post => {
        return <div className="card mt-3" key={ post.id }>
            <div className="card-header bg-primary text-white">
                <div className="row">
                    <div className="col text-start">
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
                <div className="d-flex justify-content-center">
                    <h2 className="card-title">{ post.title }</h2>&nbsp;<p onClick={ () => { updatePost({ data: post.title, id: post.id }, "title") } }><i className="fas fa-pencil-alt"></i></p>

                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="card-text mt-1">{ post.postText }</h5>&nbsp;<p onClick={ () => { updatePost({ data: post.postText, id: post.id }, "postText") } }><i className="fas fa-pencil-alt"></i></p>
                </div>
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
