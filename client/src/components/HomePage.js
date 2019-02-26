import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchExternalImages, fetchExternalImage } from '../redux/actions'
import LoadingSpinner from './LoadingSpinner'
import PostContainer from './PostContainer'

class Data extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchExternalImages()
        this.props.fetchExternalImage('BwQ92de')
    }

    render() {
        let userPostList 
        let externalPostList 

        if (this.props.userPostData !== undefined) {
            userPostList = this.props.userPostData.map((post, index) => {
                return (
                    <PostContainer 
                        id={post._id}
                        key={index}
                        title={post.title}
                        imageUrl={post.imageUrl}
                        edit={false}
                    />
                )
            })
        }
        if (this.props.externalPostData !== undefined) {
            externalPostList = this.props.externalPostData.map((post, index) => {
                return (
                    <PostContainer
                        id={post._id}
                        key={index}
                        title={post.title}
                        imageUrl={post.imageUrl}
                        edit={false}
                    />
                )
            })
        }

        return (
            <div>
                {this.props.userPostData ? userPostList : <LoadingSpinner />}
                {this.props.externalPostData ? externalPostList : <LoadingSpinner />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userPostData: state.postData.userPosts,
        externalPostData: state.postData.externalPosts
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchExternalImages, fetchExternalImage })(Data)
