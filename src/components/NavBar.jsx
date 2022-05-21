import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className='container'>
          <ul style={{justifyContent:"center", gap: "20px"}} className='nav'>
            <li className='nav-item'><Link to="/">Home</Link></li>
            <li className='nav-item'><Link to="/posts">Posts</Link></li>
          </ul>
      </div>
    )
  }
}
