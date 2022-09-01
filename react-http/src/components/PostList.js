import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                this.setState({ errorMsg: 'Error retriving data' })
                console.log(error)
            })
    }
    
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        <h4>List of posts</h4>
        {
            posts.length ? (
                posts.map(post => <div key={post.id}>{post.title}</div>)
            ) : null
        }
        { errorMsg ? <div>{errorMsg}</div> : null }
      </div>
    )
  }
}

export default PostList
