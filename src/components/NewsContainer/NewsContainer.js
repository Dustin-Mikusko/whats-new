import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ selected }) => {
  console.log(selected)
  const newsCards = selected.map(article => {
    return (
      <NewsArticle 
        key={article.id}   
        id={article.id}
        title={article.headline}
        description={article.description}
        url={article.url}
        img={article.img}
      />
    )
  })


  return (
    <main>
      <section className="search">
        <input className="search-input" type="text" placeholder="Search for news articles here."></input>
        <button className="search-btn" type="button">Search Now</button>
      </section>
      <section className="news-container">
        {newsCards}
      </section>
    </main>
  )
}

export default NewsContainer;
