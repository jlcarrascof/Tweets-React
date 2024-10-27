import { useState } from 'react'
import { UserIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import './App.css'
import TweetBox from './components/TweetBox'

export default function App() {

  const [tweets, setTweets] = useState([])

  const addTweet = (newTweet) => {
    const tweetWithInteractions = {
      ...newTweet,
      likes: 0,
      retweets: 0
    }
    setTweets([tweetWithInteractions, ...tweets]);
  }

  const handleLike = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].likes += 1;
    setTweets(updatedTweets);
  }

  const handleRetweet = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].retweets += 1;
    setTweets(updatedTweets);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white flex justify-between items-center p-4 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold pl-8">Twitter/X Clone</h1>
        <div className="flex items-center space-x-4 pr-8">
          <button className="flex items-center bg-white text-blue-500 py-1 px-4 rounded hover:bg-gray-100">
            <UserIcon className="h-5 w-5 mr-2" />
              Login
          </button>
          <button className="flex items-center bg-white text-blue-500 py-1 px-4 rounded hover:bg-gray-100">
            <UserPlusIcon className="h-5 w-5 mr-2" />
              Register
          </button>
        </div>
      </header>

      <div className="pt-10 flex-1 flex flex-col items-center mt-4">
        <TweetBox onTweetSubmit={addTweet} tweetCount={tweets.length} />

        <div className="mt-8 w-full max-w-md space-y-4">
          {tweets.map((tweet, index) => (
            <div key={index} className="border p-4 rounded-lg bg-white shadow-md">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <span className="font-bold text-gray-800">@{tweet.user}</span>
              </div>
              <p><strong>Tweet:</strong> {tweet.body}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out transform hover:scale-110"
                  onClick={() => handleLike(index)}
                >
                  Like 👍 <span className="ml-2">{tweet.likes}</span>
                </button>

                <button
                  className="flex items-center text-green-500 hover:text-green-700 transition duration-200 ease-in-out transform hover:scale-110"
                  onClick={() => handleRetweet(index)}
                >
                  Retweet 🔁 <span className="ml-2">{tweet.retweets}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 left-0 w-full">
        <p>&copy; 2024 Twitter/X Clone - All rights reserved.</p>
      </footer>

    </div>
  )
}
