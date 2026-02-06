import React from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm';
const books = [
  { title: 'Mastering React', author: 'Anthony Pham', cover: "MasteringReact" },
  { title: 'Practical React', author: 'Alex Johnson', cover: "PracticalReact" },
  { title: 'React in Action', author: 'Bob Climo', cover: "The last book cover" },
];

function App() {

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
    <>
      <section className="book-list">
        {bookCard()}
      </section>
      <section className='form-section'>
        <SimpleForm />
      </section>
    </>
  );
}

export default App;
