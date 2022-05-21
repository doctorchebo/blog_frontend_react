import React, { Component } from 'react'
import PostService from '../service/PostService';
import { withRouter } from './withRouter';

class ViewPostComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.params.id,
            title:'',
            content:'',
            imageUrl:''
        }
    }
    componentDidMount(){
        PostService.getPostById(this.state.id).then(res=>{
            const post = res.data;
            this.setState({
                title: post.title,
                content: post.content,
                imageUrl: post.imageUrl
            })
        })
    }
  render() {
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-8 offset-md-4'>
                <h1>{this.state.title}</h1>
                <img class="img-responsive center-block" style={{maxWidth:"350px"}} src={this.state.imageUrl}/>
                <p>{this.state.content}</p>
            </div>
        </div>
                
    </div>
    )
  }
}
export default withRouter(ViewPostComponent);
