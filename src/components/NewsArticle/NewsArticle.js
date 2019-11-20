import React from 'react';
import './NewsArticle.css';
import Arrow from '../../images/arrow.png';

const NewsArticle = ({ id, title, description, img, url}) => {
  return (
    <article className="article">
      <img src={img}></img>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="link">
        <a href={url}>View Article</a>
      </div>
    </article>
  )
}

export default NewsArticle;
