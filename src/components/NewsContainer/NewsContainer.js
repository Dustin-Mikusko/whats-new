import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import SearchForm from '../SearchForm/SearchForm';

const NewsContainer = ({ news, getFilteredNews }) => {
  const newsCards = news.map(article => {
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
      <SearchForm 
      getFilteredNews={getFilteredNews}
      />
      <section className="news-container">
        {newsCards}
      </section>
    </main>
  )
}

export default NewsContainer;
