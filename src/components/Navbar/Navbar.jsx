import logo from "../../images/logo.png";
import { Button, ImgLogo, InputSpace, Nav } from "./NavbarStyled";
// import "./Navbar.css"

export default function Navbar () {
  return (
    <>
      <Nav>
        <InputSpace>
          <ImgLogo src={logo} alt="Benguela Post Logo" />

          <i className="bi bi-search"></i>
          <input placeholder="Pesquise por tópico..." type="search" />
        </InputSpace>

        
        <Button>Entrar</Button>
      </Nav>
    </>
  );
};
