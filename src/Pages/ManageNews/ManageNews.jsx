import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { postSchema } from "../../components/Schemas/postSchema";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import postServices from "../../services/postServices";
import { AddPostContainer } from "./ManageNewsStyled";
import { ErrorSpan } from "../../GlobalStyled";

const ManageNews = () => {
  const { post, setPost } = useState({});

  const { action, id } = useParams();

  const navigate = useNavigate();

  const {
    register: registerPost,
    handleSubmit: handleRegisterPost,
    formState: { errors: errorsPostForm },
    setValue,
  } = useForm({ resolver: zodResolver(postSchema) });

  const newPostSubmit = async (data) => {
    try {
      const response = await postServices.createPost(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const editPostSubmit = async (data) => {
    try {
      const response = await postServices.editPost(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async () => {
    try {
      const response = await postServices.getPost(id);
      // setPost(response?.data?.post);

      setValue("title", response.data?.post?.title)
      setValue("banner", response.data?.post?.banner)
      setValue("text", response.data?.post?.text)

    } catch (error) {
      console.log(error);      
    }
  };

  useEffect(() => {
    if (action === "edit") {
      getPost();
    }
  }, []);

  return (
    <AddPostContainer>
      <h2> {action === "add" ? "Publicar" : "Editar Publicação"} </h2>

      <form
        onSubmit={
          action === "add"
            ? handleRegisterPost(newPostSubmit)
            : handleRegisterPost(editPostSubmit)
        }
      >
        <Input
          type="text"
          name="title"
          placeholder="Título"
          register={registerPost}
        />
        {errorsPostForm.title ? (
          <ErrorSpan>{errorsPostForm.title.message}</ErrorSpan>
        ) : (
          ""
        )}

        <Input
          type="text"
          name="banner"
          placeholder="Link da imagem"
          register={registerPost}
        />
        {errorsPostForm.banner ? (
          <ErrorSpan>{errorsPostForm.banner.message}</ErrorSpan>
        ) : (
          ""
        )}

        <Input
          type="text"
          name="text"
          isInput={false}
          placeholder="Texto"
          register={registerPost}
          rows={14}
        />
        {errorsPostForm.text ? (
          <ErrorSpan>{errorsPostForm.text.message}</ErrorSpan>
        ) : (
          ""
        )}

        <div>
          <Button
            type="submit"
            text={action === "add" ? "Publicar" : "Atualizar"}
          ></Button>
        </div>
      </form>
    </AddPostContainer>
  );
};

export default ManageNews;
