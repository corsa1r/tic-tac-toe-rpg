import { useState } from 'react'
import Menu from '../menu/Menu.jsx'
import { httpPost } from '../../helpers/http.jsx'

function Login() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    async function SendLogin() {
        const response = await httpPost('user/login', { name })
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
            <input onChange={handleNameChange} type="text" />
            <button onClick={SendLogin}>OK</button>

            <div>{loading}</div>
            <div>{error}</div>
        </div>
    )
}

export default Login
