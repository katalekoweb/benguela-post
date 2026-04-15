import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";

import { posts } from "../../data";
import { getAllPosts } from "../../services/postServices";
import { HomeBody } from "./HomeStyle";

export default function Home() {
  let [postList, setPostList] = useState([]);

  async function findAllPosts() {
    const response = await getAllPosts();
    setPostList(response?.data?.results);
  }

  useEffect(() => {
    findAllPosts();
  }, []); // with empty props only runs nce

  console.log(postList);

  return (
    <>
      {" "}
      {/* Fragment - Empty tag */}
      <Navbar />
      <HomeBody>
        {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </HomeBody>
    </>
  );
}
