import axios from "axios";

const localBaseUrl = "http://localhost:3000"
const remoteBaseUrl = "https://breaking-news-api-a622.onrender.com"

const getAllPosts = () => {
    const response = axios.get(`${remoteBaseUrl}/posts`)
    return response
}

const getFeaturedPost = () => {
    const response = axios.get(`${remoteBaseUrl}/posts/featured`)
    return response
}

const searchPosts = (title) => {
    const response = axios.get(`${remoteBaseUrl}/posts/search?title=${title}`)
    return response
}

export default {
    getAllPosts,
    getFeaturedPost,
    searchPosts
}