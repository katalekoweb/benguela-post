import { Link } from "react-router-dom";

export const parseTextWithHashtags = (text) => {
  if (!text) return "";

  const parts = text.split(/(\#[a-zA-Z0-9_]+)/g);

  return parts.map((part, index) => {
    if (part.startsWith("#")) {
      const tag = part.substring(1);

      return (
        <Link
          key={index}
          to={`/search?tag=${tag}`}
          style={{
            color: "#1da1f2",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {part}
        </Link>
      );
    }

    return part;
  });
};