import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  DeleteContainer,
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfilePosts,
  ProfileUser,
} from "./ProfileStyled";
import postServices from "../../services/postServices";
import Card from "../../components/Cards/Card";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getUserPosts = async () => {
    try {
      setLoading(true);
      const response = await postServices.userPosts(user.username);
      setPosts(response?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  const deletePost = async (post) => {

    try {
      if (confirm("Tem certeza que quer excluir o poste?") && post?.id) {
        await postServices.deletePost(post.id);
        getUserPosts()
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.username) getUserPosts();
  }, [user]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>
        <ProfileBackground
          src={
            "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ></ProfileBackground>

        <ProfileUser>
          <ProfileAvatar
            src={
              "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <h2>{user.name ?? "Name"}</h2>
          <h3>@{user.username ?? "username"}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to={"/manage-news/add/post"}>
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfilePosts>
        {loading ? "Carregando..." : ""}

        {posts.length == 0 && !loading ? (
          <h3>Ainda não tem nenhum post</h3>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{position: "relative"}}>
              <Card key={index} actions={true} post={post} />
              <DeleteContainer>
                <i
                  className="bi bi-trash3"
                  style={{ marginLeft: "15px" }}
                  onClick={() => deletePost(post)}
                ></i>
              </DeleteContainer>
            </div>
          ))
        )}
      </ProfilePosts>
    </ProfileContainer>
  );
};

export default Profile;
