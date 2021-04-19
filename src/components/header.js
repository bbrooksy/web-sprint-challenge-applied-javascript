const Header = (title, date, temp) => {
  const newsHeader = document.createElement('div');
  newsHeader.classList.add('header');

  const newsDate = document.createElement('span');
  newsDate.classList.add('date');
  newsDate.textContent = `${date}`;
  newsHeader.appendChild(newsDate);

  const newsTitle = document.createElement('h1');
  newsTitle.textContent = `${title}`;
  newsHeader.appendChild(newsTitle);

  const newsTemp = document.createElement('span');
  newsTemp.classList.add('temp');
  newsTemp.textContent = `${temp}`;
  newsHeader.appendChild(newsTemp);

  return newsHeader;
  
}
  



  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  const headerAppender = (selector) => {
    const headerAppender = (selector) => {
    document.querySelector(selector);
    document.appendChild(Header('Sprint Challange','April 21','75°F'))
    
    }
    
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
