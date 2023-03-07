import "./BlogList.css";

import React from "react";

export default function BlogList({ articles }) {
  return (
    <div className="section-blog">
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
