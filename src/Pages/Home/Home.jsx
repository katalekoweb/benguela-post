import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";

import postService from "../../services/postServices";
import { HomeBody, HomeHeader } from "./HomeStyle";
import Cookies from "js-cookie";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const [featPost, setFeatPost] = useState({});
  const [loading, setLoading] = useState(false)

  async function findAllPosts() {
    setLoading(true)
    const response = await postService.getAllPosts();
    setPostList(response?.data?.results);
    setLoading(false)
  }

  async function getFeaturedPost() {
    setLoading(true)
    const response = await postService.getFeaturedPost();
    setFeatPost(response?.data?.post);
    setLoading(false)
  }

  useEffect(() => {
    findAllPosts();
    getFeaturedPost()
    console.log(Cookies.get("token"));
    
  }, []); // with empty props only runs nce

  return (
    <>
      {" "}
      {/* Fragment - Empty tag */}
      
      <HomeHeader>
        { featPost?.id && <Card post={featPost} top={true} /> }
      </HomeHeader>

      <HomeBody>
        { loading ? "Carregando..." : "" }
        
        {postList.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </HomeBody>
    </>
  );
}
