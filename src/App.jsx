import { UserIcon, UserAddIcon } from '@heroicons/react/solid';
import './App.css'
import TweetBox from './components/TweetBox'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white flex justify-between items-center p-4 fixed top-0 left-0 w-full z-10">
        <h1 className='text-3xl font-bold text-center'>Twitter/X Clone</h1>
        <TweetBox />
      </header>
    </div>
  )
}
