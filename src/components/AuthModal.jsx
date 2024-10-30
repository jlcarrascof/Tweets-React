import { useState } from 'react'

export default function AuthModal({ onClose, onRegister }) {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        const userData = { username, name, email, password }
        localStorage.setItem('user', JSON.stringify(userData))
        onRegister(userData)
        onClose()
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>{isLogin ? "Login" : "Register" }</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {!isLogin && (
                    <>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </>
                )}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={isLogin ? handleLogin : handleRegister}>{isLogin ? "Login" : "Register"}</button>
                <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create an Account" : "Back to Login"}</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
