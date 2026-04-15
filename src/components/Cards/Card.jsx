import React from "react";
// import {posts} from "../../data";
import { CardBody, CardContainer, CardContent, CardFooter } from "./CardStyle";
import TextLimit from "../TextLimit/TextLimit";

const Card = ({ post }) => {
  return (
    <CardContainer>
      <CardBody>
        <CardContent>
          <div>
            <h2>{post.title}</h2>
            <TextLimit text={post.text} limit={200} />
          </div>
          
          <CardFooter>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{post.likes}</span>
            </div>
            <div>
              <i className="bi bi-chat"></i>
              <span>{post.comments}</span>
            </div>
          </CardFooter>
        </CardContent>
        <img src={post.banner} alt="" />
      </CardBody>
    </CardContainer>
  );
};

export default Card;
