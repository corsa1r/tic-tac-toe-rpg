import { useState } from 'react'
import Menu from '../menu/Menu.jsx'

function Login() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    async function SendLogin() {
        // TODO: please do not forcefully slow it down
        // and add proper response handling
        const response = await fetch('/user/login', { method: 'POST', body: JSON.stringify({ name: name }), headers: { 'Content-Type': 'application/json' } })
        setTimeout(() => {
            setLoading('')
            if (response.statusText) {
                setError(response.statusText)
                return
            }
        }, 2000)
    }


    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <Menu></Menu>
            <div>Select Name</div>
            <input onChange={handleNameChange} type="text" name="" id="" />
            <button onClick={SendLogin}>OK</button>

            <div>{loading}</div>
            <div>{error}</div>
        </div>
    )
}

export default Login
