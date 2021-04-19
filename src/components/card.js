const Card = (article) => {
  const card = document.createElement('div') 
  card.classList.add('card') 

  const cardHead = document.createElement('div') 
  cardHead.classList.add('headline') 
  cardHead.textContent = article.headline; 
  card.appendChild(cardHead) 

  const cardAuth = document.createElement('div') 
  cardAuth.classList.add('author') 
  card.appendChild(cardAuth) 

  const cardImgCont = document.createElement('div') 
  cardImgCont.classList.add('img-container') 
  cardAuth.appendChild(cardImgCont)

  const cardImg = document.createElement('img') 
  cardImg.attributes.src = article.authorPhoto 
  cardImgCont.appendChild(cardImg) 

  const span = document.createElement('span')
  span.textContent = article.authorName 
  cardAuth.appendChild(span)

  card.addEventListener('click', () => { 
      console.log(article.headline)
  })
  return card;
}





  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  const cardAppender = (selector) => {
    axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(({data}) => {
      const newData = data.articles;
      const result = Object.keys(newData).map(e => [e, newData[e]]);
      return result;
  
      result.forEach(e => {
  
      })
      const e = document.querySelector(selector);
      const newTab = Card(result);
      element.appendChild(newTab);
    })
    .catch(error => console.log('error'))
  }
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
