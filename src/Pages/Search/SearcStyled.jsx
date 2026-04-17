import styled from "styled-components";

export const ContainerResults = styled.section`
padding-top: 1rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

& img {
    width: 50%;
}
`
export const TextResults = styled.section`
padding: 1rem;
color: #444;
font-family: arial;
background: #fff;
width: 100%;
text-align: center;
margin-top: -34px;
box-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),
  0px 5px 4px rgba(3, 7, 18, 0.03),
  0px 12px 9px rgba(3, 7, 18, 0.05),
  0px 20px 15px rgba(3, 7, 18, 0.06),
  0px 32px 24px rgba(3, 7, 18, 0.08);

`