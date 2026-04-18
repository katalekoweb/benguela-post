import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  font-family: arial;

  & form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 400px;
padding: 2rem;
gap: 1rem;
background: ${(props) => (props.type === "signin" ? "#b4050b" : "white")};
color: ${(props) => (props.type === "signup" ? "#F40009" : "white")};

& h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
}
`
