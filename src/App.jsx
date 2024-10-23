import './App.css'
import TweetBox from './components/TweetBox.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white text-center p-4 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold">Twitter/X Clone</h1>
      </header>
      <div className="pt-20 flex-1 flex flex-col items-center justify-center">
        <TweetBox />
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 left-0 w-full">
        <p>&copy; 2024 Twitter/X Clone. All rights reserved.</p>
      </footer>
    </div>
  )
}
