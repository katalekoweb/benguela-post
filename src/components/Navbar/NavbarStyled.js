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
  width: 400px;
  display: flex;
  align-items: center;

  &:focus {
    width: 600px;
  }

  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background: #f5f5f5;
    border-radius: 0.3rem;
    color: #757575;
    padding: 0.5rem;
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

export const Button = styled.button`
  background-color: #F40009;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  /* width: 40%; */
  font-weight: 500;
  letter-spacing: 0.1rem;
  :hover {
    background: #c4181e;
  }
`;
