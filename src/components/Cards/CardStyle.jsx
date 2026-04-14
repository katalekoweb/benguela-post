import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 480px;
  padding: 2rem;
  border-radius: 0.6rem;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  box-shadow:
    15px 15px 29px #bebebe,
    -15px -15px 29px #ffffff;
`;

export const CardBody = styled.article`
  display: flex;
  gap: 2rem;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 50px;

  & h2 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  & img {
    width: 50%;
    height: 380px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: space-between;
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;
