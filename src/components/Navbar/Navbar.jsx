import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  ErrorSpan,
  ImgLogo,
  InputSpace,
  Nav,
  NavInner,
  UserLoggedSpace,
} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import { searchSchema } from "../Schemas/searchSchema";
import userService from "../../services/userService";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../Context/UserContext";
// import "./Navbar.css"

export default function Navbar() {
  const {user, setUser} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { query } = data;
    navigate(`/search/${query}`);
    reset();
  }

  const findLoggedUser = async () => {
    try {
      const response = await userService.getLoggedUser();
      setUser(response?.data?.user ?? {});
      console.log(response.data, user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) findLoggedUser();
  }, []);

  const signout = () => {
    if (confirm("Tem certeza?")) {
      Cookies.remove("token");
      setUser({});
      navigate("/")
    }
  };

  return (
    <>
      <Nav>
      <NavInner>                        {/* ← adiciona aqui */}
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <Link to={"/"}>
              <ImgLogo src={logo} alt="Benguela Post Logo" />
            </Link>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("query")}
              placeholder="Pesquise por tópico..."
              type="search"
            />
          </InputSpace>
        </form>

        {user?.name ? (
          <UserLoggedSpace>
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              <h2>{user.name}</h2>
            </Link>
            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </UserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button text="Entrar" />
          </Link>
        )}
      </NavInner>                       {/* ← fecha aqui */}
    </Nav>

      <div>
        {errors.query && <ErrorSpan>{errors.query?.message}</ErrorSpan>}
        <Outlet />
      </div>
    </>
  );
}
