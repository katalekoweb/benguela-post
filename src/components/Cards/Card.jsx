import React, { useState, useEffect, useContext } from "react";
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
  SpinIcon,
} from "./CardStyle";
import TextLimit from "../TextLimit/TextLimit";
import { Link } from "react-router-dom";
import postServices from "../../services/postServices";
import Cookies from "js-cookie";
import { UserContext } from "../../Context/UserContext";

const Card = ({ post, top, actions = false }) => {

  const parseTextWithHashtags = (text) => {
  if (!text) return "";

  const parts = text.split(/(\#[a-zA-Z0-9_]+)/g);

  return parts.map((part, index) => {
    if (part.startsWith("#")) {
      const tag = part.substring(1);

      return (
        <Link
          key={index}
          to={`/search?tag=${tag}`}
          style={{
            color: "#1da1f2",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {part}
        </Link>
      );
    }

    return part;
  });
};
  
  const { user } = useContext(UserContext);

  const [localPost, setLocalPost] = useState(post);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  // verifica se já deu like
  useEffect(() => {
    if (localPost?.likes && user) {
      const hasLiked = localPost.likes.some((like) => like.userId === user._id);
      setLiked(hasLiked);
    }
  }, [localPost, user]);

  const handleLike = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await postServices.likeToggle(post.id);

      const updatedPost = response.data?.post;

      if (updatedPost) {
        setLocalPost(updatedPost);

        const hasLiked = updatedPost.likes.includes(user._id);
        setLiked(hasLiked);
      }
    } catch (error) {
      console.log(error);

      // rollback se falhar
      setLiked((prev) => !prev);
    }

    setLoading(false);
  };

  return (
    <CardContainer>
      <CardBody>
        <CardHeader>
          <Avatar>
            {localPost?.user?.name?.charAt(0).toUpperCase() ?? "U"}
          </Avatar>

          <AuthorInfo>
            <span className="name">
              {localPost?.user?.name ?? "Utilizador"}
            </span>
            <span className="handle">
              @{localPost?.user?.username ?? "user"}
            </span>
          </AuthorInfo>
        </CardHeader>

        <CardTitle top={top}>{localPost?.title}</CardTitle>

        <CardText>
          {parseTextWithHashtags(localPost.text)}
        </CardText>

        {localPost?.banner && (
          <CardImage src={localPost.banner} alt={localPost?.title} />
        )}

        <CardFooter>
          {/* LIKE */}
          <FooterAction onClick={handleLike} disabled={loading} like>
            <SpinIcon
              className={`bi ${
                loading
                  ? "bi-arrow-repeat spin"
                  : liked
                  ? "bi-hand-thumbs-up-fill"
                  : "bi-hand-thumbs-up"
              }`}
              
            />
            <span>{localPost?.likes?.length ?? 0}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-chat" />
            <span>{localPost?.comments?.length ?? 0}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-arrow-repeat" />
            <span>0</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-bar-chart" />
            <span>{localPost?.views ?? "1.2K"}</span>
          </FooterAction>

          <FooterAction>
            <i className="bi bi-bookmark" />
          </FooterAction>

          <FooterAction>
            {actions && (
              <Link to={`/manage-news/edit/${localPost.id}`}>
                <i className="bi bi-pencil-square"></i>
              </Link>
            )}
          </FooterAction>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
