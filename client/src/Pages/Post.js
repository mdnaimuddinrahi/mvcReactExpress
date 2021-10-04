import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostServices from '../services/PostServices'
import Moment from 'react-moment'
import 'moment-timezone'
import CommentServices from '../services/CommentServices'
import { AuthContext } from '../helpers/AuthContext'

export const Post = () => {
    let { id } = useParams()
    const [postState, setPostState] = useState({})
    const [commentState, setCommentState] = useState({})
    const [commentBody, setcommentBody] = useState('')
    const { authState } = useContext(AuthContext)

    useEffect(() => {
        getPostDetails()
        getCommentList()
    }, [])

    const getCommentList = async () => {
        console.log(`after delete`)
        const data = await CommentServices.list(id)
        setCommentState(data)
    }

    const getPostDetails = async () => {
        const data = await PostServices.details(id)
        setPostState(data)
    }

    const commentSubmit = async (event) => {
        event.preventDefault()
        await CommentServices.store(commentBody)
        return getCommentList()
    }

    const deleteComment = async (data) => {
        // console.log(`data`, data)
        if (authState.status == false) {
            alert("Login first.")
        } else {
            const deleteUser = await CommentServices.delete(data)
            console.log(`deleteUser`, deleteUser)
            return getCommentList()
        }
    }

    let commentList = commentState.length ? commentState.map((comment, key) => {
        return <li className="list-group-item" key={ key }>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col text-start">{ comment.commentBody }</div>
                    </div>
                    <div className="row">
                        <div className="col text-start"><small className="text-muted">Created By: { comment.username }</small></div>
                    </div>
                </div>
                <div className="col text-end">
                    <div className="row">
                        <div className="col text-danger mt-2" onClick={ () => deleteComment(comment) }>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                        <div className="col mt-2">
                            <small className="text-muted"><Moment fromNow>{ comment.createdAt }</Moment></small>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    }) : null

    return (
        <div>
            <div className="row m-2">
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            { postState.title }
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ postState.username }</h5>
                            <p className="card-text">{ postState.postText }</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <Moment fromNow>{ postState.createdAt }</Moment>
                                </div>
                                <div className="col">
                                    <small className="text-muted">Comments: { commentState.length }</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <form action="" onSubmit={ commentSubmit }>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text"
                                                className="form-control" name="commentBody" id="commentBody" aria-describedby="helpId" placeholder="Comment below" onChange={ (event) => setcommentBody({ commentBody: event.target.value, PostId: id }) } />
                                        </div>
                                        <div className="col"><button className="btn btn-primary">Submit</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <ul className="list-group list-group-flush">
                            { commentList }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

