import "./BlogList.css";

import React from "react";

export default function BlogList({ articles }) {
  return (
    <div className="section-blog">
      {articles.map((article) => (
        <div key={article.id}>
          <h3 className="heading-secondary">{article.title}</h3>
          <p className="cta-text">{article.content}</p>
        </div>
      ))}
    </div>
  );
}
