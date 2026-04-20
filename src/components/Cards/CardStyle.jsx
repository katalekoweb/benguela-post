import styled, { css } from "styled-components";

/* ── tokens ── */
const tokens = {
  bg: "#ffffff",
  border: "#eff3f4",
  text: "#0f1419",
  textMuted: "#536471",
  accent: "#EE4017",
  accentLike: "#f91880",
  accentRetweet: "#00ba7c",
  hover: "#f7f9f9",
  radius: "16px",
};

/* ── Container: sem box-shadow pesado, separador sutil como no Twitter ── */
export const CardContainer = styled.section`
  width: 100%;
  background: ${tokens.bg};
  border-bottom: 1px solid ${tokens.border};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${tokens.hover};
  }
`;

export const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  width: 100%;
`;

/* ── Header: avatar + nome ── */
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background: ${tokens.accent};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    width: 48px;
    height: 48px;
    min-width: 48px;
    font-size: 1.1rem;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;

  .name {
    font-weight: 700;
    font-size: 0.9375rem;
    color: ${tokens.text};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .handle {
    font-size: 0.875rem;
    color: ${tokens.textMuted};
  }
`;

/* ── Título ── */
export const CardTitle = styled.h2`
  font-weight: 700;
  color: ${tokens.text};
  line-height: 1.3;
  margin: 0;

  font-size: ${({ top }) => (top ? "1.375rem" : "1rem")};

  @media (min-width: 600px) {
    font-size: ${({ top }) => (top ? "1.625rem" : "1.0625rem")};
  }
`;

/* ── Texto do post ── */
export const CardText = styled.div`
  font-size: 0.9375rem;
  color: ${tokens.text};
  line-height: 1.5;
`;

/* ── Imagem: ocupa largura total com cantos arredondados ── */
export const CardImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  object-position: center;
  border-radius: ${tokens.radius};
  border: 1px solid ${tokens.border};

  @media (min-width: 600px) {
    max-height: 380px;
  }
`;

/* ── Footer: ações distribuídas ── */
export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25rem;
  max-width: 425px;
`;

export const FooterAction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.35rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: ${tokens.textMuted};
  transition: color 0.15s, background 0.15s;

  i {
    font-size: 1.05rem;
  }

  /* hover por tipo de ação */
  &:hover {
    ${({ like }) =>
      like
        ? css`
            color: ${tokens.accentLike};
            background: rgba(249, 24, 128, 0.1);
          `
        : css`
            color: ${tokens.accent};
            background: rgba(29, 155, 240, 0.1);
          `}
  }
`;