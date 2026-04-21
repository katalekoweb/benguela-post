import axios from "axios";
import Cookies from "js-cookie";

const localBaseUrl = "http://localhost:3000";
const remoteBaseUrl = "https://breaking-news-api-a622.onrender.com";

const getAllPosts = () => {
  const response = axios.get(`${remoteBaseUrl}/posts`);
  return response;
};

const getFeaturedPost = () => {
  const response = axios.get(`${remoteBaseUrl}/posts/featured`);
  return response;
};

const searchPosts = (title) => {
  const response = axios.get(`${remoteBaseUrl}/posts/search?title=${title}`);
  return response;
};

const userPosts = (username) => {
  const response = axios.get(`${remoteBaseUrl}/posts/up/${username}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

const getPost = (id) => {
  const response = axios.get(`${remoteBaseUrl}/posts/${id}`);
  return response;
};

const createPost = (data) => {
  const response = axios.post(`${remoteBaseUrl}/posts/`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

const editPost = (data, id) => {
  const response = axios.patch(`${remoteBaseUrl}/posts/${id}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

const deletePost = (id) => {

  if (!id) return null;

  const response = axios.delete(`${remoteBaseUrl}/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

const likeToggle = (id) => {
  if (!id) return null;

  const response = axios.patch(`${remoteBaseUrl}/posts/like/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export default {
  getAllPosts,
  getPost,
  getFeaturedPost,
  searchPosts,
  userPosts,
  createPost,
  editPost,
  deletePost,
  likeToggle
};
