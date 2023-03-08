import "./BlogList.css";

import React from "react";

export default function BlogList({ articles }) {
  const article1 = articles[0];
  const article2 = articles[1];
  const article3 = articles[2];
  const article4 = articles[3];

  return (
    <div className="wrap blog-grid">
      <div className="grid grid-pad">
        <div className="section-blog">
          <h3>Nasz Blog</h3>

          <div className="col-1-2">
            <h3 className="heading-blog">{article1.title}</h3>
            <p className="cta-text">{article1.content}</p>
          </div>

          <div className="col-1-2">
            <h3 className="heading-blog">{article2.title}</h3>
            <p className="cta-text">{article2.content}</p>
          </div>

          <div className="col-1-2">
            <h3 className="heading-blog">{article3.title}</h3>
            <p className="cta-text">{article3.content}</p>
          </div>

          <div className="col-1-2">
            <h3 className="heading-blog">{article4.title}</h3>
            <p className="cta-text">{article4.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
