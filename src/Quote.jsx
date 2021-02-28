import React from 'react';
import { ReactComponent as TwitterLogo } from './twitter.svg';
import { ReactComponent as RefreshIcon } from './refresh.svg';

const Quote = ({ quote, updateQuote }) => {
  return (
    <div>
      <div id='text' className='quote-text'>
        {quote.quote}
      </div>
      <div id='author' className='quote-author'>
        — {quote.author}
      </div>

      <div className='quote-actions'>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
          id='tweet-quote'
          target='_blank'
          className='tweet-quote quote-action'
          rel='noopener noreferrer'
        >
          <TwitterLogo />
        </a>
        <button
          id='new-quote'
          className='new-quote quote-action'
          onClick={updateQuote}
        >
          <RefreshIcon />
        </button>
      </div>
    </div>
  );
};

export default Quote;
