import axios from "axios";
import Cookies from "js-cookie";

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

const userPosts = (username) => {
    const response = axios.get(`${remoteBaseUrl}/posts/up/${username}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        })
    return response
}

export default {
    getAllPosts,
    getFeaturedPost,
    searchPosts,
    userPosts
}