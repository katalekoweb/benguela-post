import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postServices from "../../services/postServices";
import { Feed } from "../Home/HomeStyle";
import { ContainerResults, TextResults } from "./SearcStyled";
import Card from "../../components/Cards/Card";

const Search = () => {
  const { query } = useParams();

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchPosts() {
    try {
      setLoading(true);
      const response = await postServices.searchPosts(query);
      setPostList(response?.data?.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setPostList([]);
      setLoading(false)
    }
  }

  useEffect(() => {
    searchPosts();
  }, [query]);

  return (
    <>
      <ContainerResults>

        { !loading && <TextResults>
          { postList.length ? `Encontramos ${postList.length} resultados` : `Nenhum resultado encontrado para ${query}.` }
        </TextResults> }

        <Feed>
          {loading ? "Carregando..." : ""}

          {postList.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </Feed>
      </ContainerResults>
    </>
  );
};

export default Search;
