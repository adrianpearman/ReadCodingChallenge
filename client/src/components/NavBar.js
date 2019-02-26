import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        const rowStyle = { flexDirection: 'row'}
        const navItemStyle = { padding: '1rem' }
        const { isAuthenticated } = this.props.user
        const notAuthenticatedNav = (
        <div>
            <ul className="navbar-nav mr-auto" style={rowStyle}>
                <li style={navItemStyle}>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li style={navItemStyle}>
                    <Link className='nav-link' to='/register'>Register</Link>
                </li>
                <li style={navItemStyle}>
                    <Link className='nav-link' to='/login'>Login</Link>
                </li>
            </ul>
        </div>
        )
        const AuthenticatedNav = (
            <div>
                <ul className="navbar-nav mr-auto" style={rowStyle}>
                    <li style={navItemStyle}>
                        <Link className='nav-link' to='/addPost'>Add Post</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link className='nav-link' to='/userPosts'>View Posts</Link>
                    </li>
                    <li style={navItemStyle}>
                        <Link className='nav-link' to='/'>LogOut</Link>
                    </li>
                </ul>
            </div>
        )

        return(
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">Food-Interest</Link>
                
                { isAuthenticated ? AuthenticatedNav : notAuthenticatedNav}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {})(NavBar)