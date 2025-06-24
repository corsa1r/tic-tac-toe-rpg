import { NavLink } from 'react-router'

export default function Menu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/lobbies">Lobbies</NavLink>
        </nav>
    )
}
