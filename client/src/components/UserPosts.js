import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../redux/actions'
import LoadingSpinner from './LoadingSpinner'
import PostContainer from './PostContainer'

class UserPosts extends Component{
    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        let userPosts  
        if(this.props.posts === undefined){
            userPosts = <LoadingSpinner />
        }else{
            userPosts = this.props.posts.map((post, index) => {
                return (
                    <PostContainer 
                        key={index}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        edit={true}
                    />
                )
            })
        }
        
        return (
           <div className='col-10 offset-1 mt-5'>
                <h2 className='my-4' style={{textAlign: 'center'}}>Your current posts</h2>
                {userPosts}
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postData.userPosts
    }
}

export default connect(mapStateToProps, {fetchPosts})(UserPosts)