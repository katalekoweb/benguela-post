import React from "react";
import {
  CardContainer,
  CardBody,
  CardHeader,
  Avatar,
  AuthorInfo,
  CardImage,
  CardFooter,
  FooterAction,
  CardText,
  CardTitle,
} from "./CardStyle";
import TextLimit from "../TextLimit/TextLimit";
import { Link, useNavigate } from "react-router-dom";
import postServices from "../../services/postServices";

const Card = ({ post, top, actions = false }) => {

  const navigate = useNavigate()

  const deletePost = async () => {
    try {
      const response = await postServices.deletePost(post.id)
      navigate("/profile")
    } catch (error) {
      console.log(error);      
    }
  }

  return (
    <CardContainer>
      <CardBody>
        <CardHeader>
          <Avatar>
            {post?.author?.name?.charAt(0).toUpperCase() ?? "U"}
          </Avatar>
          <AuthorInfo>
            <span className="name">{post?.user?.name ?? "Utilizador"}</span>
            <span className="handle">@{post?.user?.username ?? "user"}</span>
          </AuthorInfo>
        </CardHeader>

        <CardTitle top={top}>{post?.title}</CardTitle>

        <CardText>
          <TextLimit text={post?.text} limit={top ? 300 : 150} />
        </CardText>

        {post?.banner && (
          <CardImage src={post.banner} alt={post?.title} />
        )}

        <CardFooter>
          <FooterAction>
            <i className="bi bi-chat" />
            <span>{post?.comments?.length ?? 0}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-arrow-repeat" />
            <span>0</span>
          </FooterAction>

          <FooterAction like>
            <i className="bi bi-hand-thumbs-up" />
            <span>{post?.likes?.length ?? 0}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-bar-chart" />
            <span>{post?.views ?? "1.2K"}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-bookmark" />
          </FooterAction>

          <FooterAction>
          { actions ? (
            <>
              <Link to={`/manage-news/edit/${post.id}`}><i className="bi bi-pencil-square"></i></Link>
              <i className="bi bi-trash3" style={{marginLeft: '15px'}} onClick={() => deletePost()}></i>
            </>
          ) : "" }
          </FooterAction>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;