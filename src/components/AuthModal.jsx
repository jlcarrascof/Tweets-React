import { useState } from 'react'

export default function AuthModal({ onClose, onRegister }) {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='modal'>

        </div>
    )
}
