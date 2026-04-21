import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";

import postService from "../../services/postServices";
import Cookies from "js-cookie";

import {
  HomeContainer,
  Feed,
  Sidebar,
  TrendsBox,
  CreatePostButton,
} from "./HomeStyle";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const [featPost, setFeatPost] = useState({});
  const [loading, setLoading] = useState(false);

  async function findAllPosts() {
    try {
      setLoading(true);
      const response = await postService.getAllPosts();
      setPostList(response?.data?.results || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function getFeaturedPost() {
    try {
      setLoading(true);
      const response = await postService.getFeaturedPost();
      setFeatPost(response?.data?.post || {});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  useEffect(() => {
    findAllPosts();
    getFeaturedPost();
    console.log("Token:", Cookies.get("token"));
  }, []);

  return (
    <>
      <HomeContainer>
        {/* FEED */}
        <Feed>
          {loading && <p>Carregando...</p>}

          {/* {featPost?.id && <Card post={featPost} top={true} />} */}

          {postList.length === 0 && !loading ? (
            <h3>Ainda não tem nenhum post</h3>
          ) : (
            postList.map((post) => <Card key={post.id} post={post} />)
          )}
        </Feed>

        {/* SIDEBAR */}
        <Sidebar>
          <TrendsBox>
            <h3>Trends</h3>
            <ul>
              <li>#React</li>
              <li>#JavaScript</li>
              <li>#AngolaTech</li>
              <li>#WebDev</li>
            </ul>
          </TrendsBox>

          <CreatePostButton onClick={() => alert("Criar Post")}>
            Criar Post
          </CreatePostButton>
        </Sidebar>
      </HomeContainer>
    </>
  );
}
