import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../redux/store'
import HomePage from './HomePage'
import Login from './Login'
import Register from './Register'
import Error404 from './Error404'
import NavBar from './NavBar'
import AddPost from './AddPost'
import UserPosts from './UserPosts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <NavBar />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/addPost' component={AddPost}/>
              <Route path='/userPosts' component={UserPosts}/>
              <Route path='/post/:id' component={UserPosts}/>
              <Route component={Error404} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
