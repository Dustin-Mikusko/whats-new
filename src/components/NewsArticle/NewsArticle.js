import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ id, title, description, img, url}) => {
  return (
    <article className="article">
      <img src={img}></img>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="link">
        <a href={url}>Link To Article</a>
        <img src="../images/arrow.png"></img>
      </div>
    </article>
  )
}

export default NewsArticle;
