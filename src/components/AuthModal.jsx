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

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem('user'))
        if (savedUser && savedUser.username === username && savedUser.password === password) {
          onRegister(savedUser)
          onClose();
        } else {
          alert('Usuario o contraseña inválidos')
        }
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
