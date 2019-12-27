export const getNews = () => {
  return fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(res => {
      if (!res.ok) {
        throw Error('Could not find news')
      } else {
        return res.json();
      }
    })
}
