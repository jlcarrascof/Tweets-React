import { UserIcon, UserAddIcon } from '@heroicons/react/solid';
import './App.css'
import TweetBox from './components/TweetBox'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className='text-3xl font-bold text-center'>Twitter/X Clone</h1>
      <TweetBox />
    </div>
  )
}
