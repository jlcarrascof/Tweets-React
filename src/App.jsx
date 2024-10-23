import { UserIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import './App.css'
import TweetBox from './components/TweetBox'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white flex justify-between items-center p-4 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold pl-8">Clon de Twitter/X</h1>
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
      <TweetBox />

    </div>
  )
}
