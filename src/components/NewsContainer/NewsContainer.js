import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import SearchForm from '../SearchForm/SearchForm';
import PropTypes from 'prop-types';

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

NewsContainer.propTypes = {
  news: PropTypes.array,
  getFilteredNews: PropTypes.func
}

export default NewsContainer;
