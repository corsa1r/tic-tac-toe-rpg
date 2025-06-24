import { createBrowserRouter } from 'react-router'
import Login from './components/login/Login.jsx'
import Lobbies from './components/lobbies/Lobbies.jsx'
import Lobby from './components/lobby/Lobby.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Login,
    },
    {
        path: '/lobbies',
        Component: Lobbies,
    },
    {
        path: '/lobby/:id',
        Component: Lobby,
    }
])
