import logo from "../../images/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input placeholder="Pesquise por tópico..." type="search" />
        </div>

        <img src={logo} alt="Benguela Post Logo" />

        <button>Entrar</button>
      </nav>
    </>
  );
};

export default Navbar;
