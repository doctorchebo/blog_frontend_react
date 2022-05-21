import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ListPostsComponent from './components/ListPostsComponent';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PostDetails from './components/PostDetails';
import Post from './components/Post';
import CreatePostComponent from './components/CreatePostComponent';
import UpdatePostComponent from './components/UpdatePostComponent';
import ViewPostComponent from './components/ViewPostComponent';

function App() {
  return (
    <div className="container">
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}></Route>
          <Route path="/post/:id" element={<PostDetails/>}></Route>
          <Route path="/posts" element={<ListPostsComponent/>}></Route>
          <Route path="/add-post" element={<CreatePostComponent/>}></Route>
          <Route path="/update-post/:id" element={<UpdatePostComponent/>}></Route>
          <Route path="/view-post/:id" element={<ViewPostComponent/>}></Route>
        </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
