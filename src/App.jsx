import './App.css'
import TweetBox from './components/TweetBox.jsx';

export default function App() {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white text-center p-4">
        <h1 className="text-3xl font-bold text-center">Twitter/X Clone</h1>
      </header>
      <TweetBox />
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2024 Twitter/X Clone. All rights reserved.</p>
      </footer>
    </div>
  )
}
