import React, { useState } from 'react';

export default function TweetBox() {

  const [tweet, setTweet] = useState('');
  const maxLength = 280;

  const handleTweetChange = (e) => {
    if (e.target.value.length <= maxLength) {
        setTweet(e.target.value); // Actualiza el tweet solo si está dentro del límite
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-4">
      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="¿What's happening?"
      ></textarea>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600">
        Send Tweet
      </button>
    </div>
  );
}
