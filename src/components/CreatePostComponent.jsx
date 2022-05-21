import React, { Component } from 'react'
import PostService from '../service/PostService';
import { withRouter } from './withRouter';

class CreatePostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            imageUrl:''
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
        this.savePost = this.savePost.bind(this);
        this.cancel = this.cancel.bind(this);
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
    savePost(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            content: this.state.content,
            imageUrl: this.state.imageUrl
        }
        PostService.createPost(post).then(res=>{
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
            <div className='form-control'>
                <h3>Create Post</h3>
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.updateTitle}/>
                <label>Content</label>
                <textarea type="text" className="form-control" name="title" value={this.state.content} onChange={this.updateContent}/>            
                <label>Image URL</label>
                <input type="text" className="form-control" name="title" value={this.state.imageUrl} onChange={this.updateImageUrl}/>
                <br></br>
                <button className="btn btn-success" type="bubmit" onClick={this.savePost}>Save</button>
                <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={this.cancel}>Cancel</button>
            </div>    
        </form>
      </div>
      </div>
    )
  }
}

export default withRouter(CreatePostComponent);
