import './App.css';
import BookForm from './components/BookForm';
import Book from './components/Book';
import {useState} from 'react';

function App() {

  const [book, setBook] = useState({response: {title: "", author: "", synopsis:""}})
  console.log(book)
  return (
    <div className="App">
      <BookForm setBook={setBook}  />
      <Book book={book}/>
    </div>
  );
}

export default App;
