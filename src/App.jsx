import { UserIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import './App.css'
import TweetBox from './components/TweetBox'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white flex justify-between items-center p-4 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold pl-8">Clon de Twitter/X</h1>
        <div className="flex items-center space-x-4 pr-8">

        </div>
      </header>
      <TweetBox />

    </div>
  )
}
