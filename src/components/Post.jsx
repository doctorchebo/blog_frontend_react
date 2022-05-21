import React, { Component } from 'react'
import PostService from '../service/PostService';
import { withRouter } from './withRouter';

class Post extends Component {
    constructor(props){
        super(props)
        
    }
    
  render() {
    return (
      <div>
          <div className='card'>
            <img style={{maxWidth:"500px"}} className="card-img-top" src={this.props.imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.content}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Post);
