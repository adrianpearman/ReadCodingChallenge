import React from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

const PostContainer = (props) => {
    return(
        <div 
            className="card col" 
            style={{ width: '33%', display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0)' }}
        >
            {props.imageUrl ? 
                <Link to={`/post/${props.id}`}>
                    <img 
                        src={props.imageUrl} 
                        className="card-img-top" 
                        alt={props.title} 
                        style={{
                            maxHeight: '20rem',
                            padding: '2rem'
                            }}
                    />
                </Link>
                    :
                <LoadingSpinner />
            }
            <div className="card-body">
            <p>{props.id}</p>
            <h4 className="card-title">
                {props.title}
            </h4>
                <h5>Comments: {props.comments ? props.comments.length : 0}</h5>

            { props.edit ? 
                <a href="#" className="btn btn-success">Edit</a> 
                : null 
            }
            { props.edit ? 
                <a href="#" className="btn btn-danger">Delete</a> 
                : null 
            }
            </div>
        </div>
    )
}

export default PostContainer


