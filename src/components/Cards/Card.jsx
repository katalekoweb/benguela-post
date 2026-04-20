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

const Card = ({ post, top }) => {

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
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;