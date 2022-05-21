import React, { Component } from 'react'
import PostService from '../service/PostService';
import Post from './Post';
import { withRouter } from './withRouter';

class ListPostsComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
        this.createPost = this.createPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this); 
        this.viewPost = this.viewPost.bind(this);
    }
    componentDidMount(){
        PostService.getPosts().then(res=>{
            this.setState({
                posts: res.data
            })
            
        })
    }

    createPost(){
        this.props.navigate("/add-post")
    }
    updatePost(id){
        this.props.navigate(`/update-post/${id}`)    
    }
    deletePost(id){
        PostService.deletePost(id).then(res=>{
            this.setState({
                posts: this.state.posts.filter(post=> post.id !== id)
            })
        })
    }
    viewPost(id){
        this.props.navigate(`/view-post/${id}`)
    }
    render() {
    return (
      <div className='container'>
        <div className='row-md-2'>
            <button className='btn btn-success' onClick={this.createPost}>Create Post</button>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <ul style={{listStyleType: "none"}}>
                    {this.state.posts.map(post=>(
                        <li key={post.id}>
                            <Post
                                id = {post.id}
                                title={post.title}
                                content={post.content}
                                imageUrl={post.imageUrl}
                            /> 
                            <button className="btn btn-info" onClick={()=>this.viewPost(post.id)}>View</button>
                            <button style={{marginLeft:"10px"}} className="btn btn-success" onClick={()=>this.updatePost(post.id)}>Edit</button>
                            <button style={{marginLeft:"10px"}} className="btn btn-danger" onClick={()=> this.deletePost(post.id)}>Delete</button>
                        </li>    
                    )   
                    )}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListPostsComponent);
