import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  top: 0;
  background: #fff;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 1rem;
`;

export const ImgLogo = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 700px;
  display: flex;
  align-items: center;

  &:focus {
    width: 600px;
  }

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background: #f5f5f5;
    border-radius: 0.3rem;
    color: #757575;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #d6d3d3;
    }
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
    &:focus {
      border: 2px solid #F40009;
    }
  }
`;

export const ErrorSpan = styled.span`
  background: #ffaeae;
  color: #9e0000;
  padding: 0.6rem;
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  justify-content: center;
  margin-top: -1rem;
`

export const UserLoggedSpace = styled.div`
display:flex;
align-items: center;
justify-content: center;
max-width: 100%;
gap: 1rem;

& h2 {
  font-size: 1.1rem;
  color: #F40009;
  transition: all 0.3s;
  cursor: pointer;
}

& h2:hover {
  color: #043546;
}

& i {
  font-size: 1.5rem;
  color: #F40009;
  cursor: pointer;
}
`