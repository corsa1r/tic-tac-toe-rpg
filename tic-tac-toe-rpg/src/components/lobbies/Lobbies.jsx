import { useEffect, useState } from 'react'
import { httpGet } from '../../helpers/http.jsx'
import { to } from '../../helpers/await-to.jsx'
import Menu from '../menu/Menu.jsx'

function Lobbies() {
  const [lobbies, setLobbies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    httpGet('lobbies')
      .then((data) => setLobbies(data))
      .catch((err) => setError(`Error fetching lobbies: ${err.message}`))
  }, []);

  return (
    <div>
      <Menu></Menu>
      <div>{error}</div>
      <h1>Lobbies</h1>
      <ul>
        {lobbies.map((lobby) => (
          <li key={lobby.id}>
            <h2>{lobby.name}</h2>
            <p>Players: {lobby.players.length}</p>
            <button disabled={lobby.players.length == 2} className="join">JOIN</button>
          </li>
        ))}
        {lobbies.length === 0 && <li>No lobbies available</li>}
      </ul>
    </div>
  )
}

export default Lobbies
