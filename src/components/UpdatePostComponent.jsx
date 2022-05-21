import React, { Component } from 'react'
import PostService from '../service/PostService';
import { withRouter } from './withRouter';

class UpdatePostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.params.id,
            title:'',
            content:'',
            imageUrl:''
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        PostService.getPostById(this.state.id).then(res=>{
            const post = res.data;
            this.setState({
                title:post.title,
                content:post.content,
                imageUrl: post.imageUrl
            })
        })
    }

    updateTitle(e){
        this.setState({title:e.target.value})
    }
    updateContent(e){
        this.setState({content:e.target.value})
    }
    updateImageUrl(e){
        this.setState({imageUrl:e.target.value})
    }
    updatePost(e){
        e.preventDefault();
        const updatedPost = {
            title : this.state.title,
            content : this.state.content,
            imageUrl: this.state.imageUrl
        }
        PostService.updatePost(this.state.id, updatedPost).then(res=>{
            this.props.navigate("/posts")
        })   
    }

    cancel(){
        this.props.navigate("/posts")
    }

    render() {
    return (
      <div className='container'>
      <div className='row'>
        <form className='col-md-6 offset-md-3'>
            <h3>Update Post</h3>
            <div className='form-control'>
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.updateTitle}/>
                <label>Content</label>
                <textarea type="text" className="form-control" name="title" value={this.state.content} onChange={this.updateContent}/>            
                <label>Image URL</label>
                <input type="text" className="form-control" name="title" value={this.state.imageUrl} onChange={this.updateImageUrl}/>
                <br></br>
                <button className="btn btn-success" type="bubmit" onClick={this.updatePost}>Save</button>
                <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={this.cancel}>Cancel</button>
            </div>    
        </form>
      </div>
      </div>
    )
  }
}

export default withRouter(UpdatePostComponent);
