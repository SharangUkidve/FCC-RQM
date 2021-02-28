import { useEffect, useState } from 'react';
import Quote from './Quote';
import { ReactComponent as Loader } from './loader.svg';

function getRandomQuote(quotes) {
  const ind = Math.round((Math.random() * 37) % (quotes.length - 1));
  return quotes[ind];
}

function App() {
  const [quotes, setQuotes] = useState();
  const [currentQuote, setCurrentQuote] = useState();

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then(r => r.json())
      .then(v => {
        setQuotes(v.quotes);
      });
  }, []);

  useEffect(() => {
    if (quotes?.length) {
      setCurrentQuote(getRandomQuote(quotes));
    }
  }, [quotes]);

  const updateQuote = () => {
    setCurrentQuote(getRandomQuote(quotes));
  };

  return (
    <div className='quote-box' id='quote-box'>
      {currentQuote ? (
        <Quote quote={currentQuote} updateQuote={updateQuote} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
