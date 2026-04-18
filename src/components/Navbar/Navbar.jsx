import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { ErrorSpan, ImgLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import { searchSchema } from "../Schemas/searchSchema";
// import "./Navbar.css"


export default function Navbar () {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(searchSchema)
  })
  const navigate = useNavigate()

  function onSearch (data) {
    const {query} = data    
    navigate(`/search/${query}`)
    reset()
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
        <InputSpace>
          <Link to={"/"}><ImgLogo src={logo} alt="Benguela Post Logo" /></Link>

          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
          <input {...register('query')} placeholder="Pesquise por tópico..." type="search" />
        </InputSpace>
        </form>
      
        <Link to="/auth"><Button text="Entrar" /></Link>
      </Nav>

      <div>
        {errors.query && <ErrorSpan>{errors.query?.message}</ErrorSpan>}
        <Outlet />
      </div>
    </>
  );
};
