import React from 'react'
const books = [
  //set of books
  { title: 'Mastering React', author: 'Anthony Pham', cover: "MasteringReact" },
  { title: 'Practical React', author: 'Alex Johnson', cover: "PracticalReact" },
  { title: 'React in Action', author: 'Bob Climo', cover: "The last book cover" },
];
function Home() {
      <div className="App">
   
  </div>
  const bookCard = () => {
    return books.map((book, index) => (
      <div key={index} className="book-card">
        <h2>The book Collection</h2>
        <h1>Book {index + 1}</h1>
        <p>Name: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Cover: {book.cover}</p>
      </div>
    ));
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our React application.</p>

        {bookCard()}
    </div>
  )
}

export default Home
