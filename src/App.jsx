import React from "react";
import BookCard from "./cart/bookcard";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic novel about wealth and ambition." },
  { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel about totalitarianism and surveillance." },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A story about racial injustice and moral growth." }
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          title={book.title} 
          author={book.author} 
          description={book.description} 
        />
      ))}
    </div>
  );
};

export default App;