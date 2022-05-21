import axios from "axios";
import Post from "../components/Post";

const BLOG_API_BASE_URL = "http://localhost:8080/api/v1/posts"

class PostsService {
    getPosts(){
        return axios.get(BLOG_API_BASE_URL)
    }
    createPost(post){
        return axios.post(BLOG_API_BASE_URL, post)
    }
    getPostById(postId){
        return axios.get(BLOG_API_BASE_URL + "/" + postId)
    }

    updatePost(postId , updatedPost){
        return axios.put(BLOG_API_BASE_URL + "/" + postId, updatedPost)
    }

    deletePost(postId){
        return axios.delete(BLOG_API_BASE_URL + "/" + postId)
    }
}

export default new PostsService();