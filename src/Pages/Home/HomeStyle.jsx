import styled from "styled-components";

export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 600px) 300px;
  gap: 2rem;

  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 20px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TrendsBox = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 10px;

  h3 {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
    cursor: pointer;
  }
`;

export const CreatePostButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 20px;
  background: #1da1f2;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;