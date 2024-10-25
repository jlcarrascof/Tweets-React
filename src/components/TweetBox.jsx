import React, { useState } from 'react';

export default function TweetBox({ onTweetSubmit }) {
  const [tweet, setTweet] = useState('');
  const maxLength = 150;

  const handleTweetChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setTweet(e.target.value);
    }
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    if (tweet.length > 0) {
      onTweetSubmit(tweet);  // Llamamos a la función onTweetSubmit para pasarle el nuevo tweet a App.jsx
      setTweet('');  // Limpiamos la caja de texto después de enviar el tweet
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-4">
      <textarea
        value={tweet}
        onChange={handleTweetChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 min-h-[120px] min-w-[400px]"
        placeholder="What's happening?"
      ></textarea>
      <div className="text-right mt-2 text-gray-600">
        {tweet.length}/{maxLength} Chars.
      </div>
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 ${
        tweet.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={tweet.length === 0}
      >
        Send Tweet
      </button>
    </div>
  );
}
