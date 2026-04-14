import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";

import { posts } from "../../data";
// import { getAllPosts } from "../../services/postServices";
import { HomeBody } from "./HomeStyle";

export default function Home() {

  // let postList = [];

  // async function findAllPosts () {
  //   const response = await getAllPosts()
  //   postList = response?.data?.results
  // }

  // findAllPosts()

  return (
    <>
      {" "}
      {/* Fragment - Empty tag */}
      <Navbar />
      <HomeBody>
      {posts.map((post, index) => <Card key={index} post={post} /> )}
      </HomeBody>
    </>
  );
}
