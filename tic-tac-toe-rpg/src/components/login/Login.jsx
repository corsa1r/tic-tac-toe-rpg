import { useState } from 'react'
import { httpPost } from '../../helpers/http.jsx'
import { to } from '../../helpers/await-to.jsx'
import { useNavigate } from 'react-router'

import Menu from '../menu/Menu.jsx'

function Login() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

    async function SendLogin() {
        setDisabled(true)
        setLoading('Loading...')
        setError('')
        const [error, response] = await to(httpPost('user/login', { name }))
        if (error) {
            setLoading('')
            setError(error.message)
            return
        }
        return navigate('/lobby/' + response.id)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <Menu></Menu>
            <div>Select Name</div>
            <input disabled={disabled} onChange={handleNameChange} type="text" />
            <button disabled={disabled} onClick={SendLogin}>OK</button>

            <div>{loading}</div>
            <div>{error}</div>
        </div>
    )
}

export default Login
