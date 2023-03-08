import "./BlogList.css";
import React, { useState } from "react";

export default function BlogList({ articles }) {
  const [showFull, setShowFull] = useState(false);
  const article1 = articles[0];
  const article2 = articles[1];
  const article3 = articles[2];
  const article4 = articles[3];

  const toggleShowFull = () => {
    setShowFull((prevShowFull) => !prevShowFull);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const getArticleContent = (article) => {
    return showFull ? article.content : truncateText(article.content, 100);
  };

  return (
    <div className="wrap blog-grid">
      <div className="grid grid-pad">
        <div className="section-blog">
          <h3 className="blog-heading">Nasz Blog</h3>

          <div className="col-1-2">
            <article className="post-wrap">
              <div className="post-img">
                <img src="./pexels_3.jpg" />
              </div>
              <div className="post">
                <h3 className="heading-blog">{article1.title}</h3>
                <p className="cta-text">{getArticleContent(article1)}</p>
                <button className="btn-blog" onClick={toggleShowFull}>
                  {showFull ? "Pokaż mniej" : "Czytaj więcej"}
                </button>
              </div>
            </article>
          </div>

          <div className="col-1-2">
            <article className="post-wrap">
              <div className="post-img">
                <img src="./pexels_4.jpg" />
              </div>
              <div className="post">
                <h3 className="heading-blog">{article2.title}</h3>
                <p className="cta-text">{getArticleContent(article2)}</p>
                <button className="btn-blog" onClick={toggleShowFull}>
                  {showFull ? "Pokaż mniej" : "Czytaj więcej"}
                </button>
              </div>
            </article>
          </div>

          <div className="col-1-2">
            <article className="post-wrap">
              <div className="post-img">
                <img src="./pexels_5.jpg" />
              </div>
              <div className="post">
                <h3 className="heading-blog">{article3.title}</h3>
                <p className="cta-text">{getArticleContent(article3)}</p>
                <button className="btn-blog" onClick={toggleShowFull}>
                  {showFull ? "Pokaż mniej" : "Czytaj więcej"}
                </button>
              </div>
            </article>
          </div>

          <div className="col-1-2">
            <article className="post-wrap">
              <div className="post-img">
                <img src="./pexels_6.jpg" />
              </div>
              <div className="post">
                <h3 className="heading-blog">{article4.title}</h3>
                <p className="cta-text">{getArticleContent(article4)}</p>
                <button className="btn-blog" onClick={toggleShowFull}>
                  {showFull ? "Pokaż mniej" : "Czytaj więcej"}
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
