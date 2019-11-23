import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';


const NewsArticle = ({ title, description, img, url }) => {
  return (
    <article className="article">
      <img alt="article snapshot"src={img}></img>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="link">
        <a href={url} rel="noopener noreferrer" target="_blank">View Article</a>
      </div>
    </article>
  )
}

NewsArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string
}

export default NewsArticle;
