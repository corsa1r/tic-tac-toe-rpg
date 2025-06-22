const database = require('../database/Database')

class LobbyController {

    getLobbies(req, res) {
        res.status(200).json({
            success: true,
            message: 'Lobbies retrieved successfully',
            data: database.lobbies,
        })
    }

    joinLobbyById(req, res) {
        const { playerId } = req.body
        const lobbyId = req.params.id
        let lobby = database.lobbies.find(lobby => lobby.id === lobbyId);
        if (!lobby) {
            return res.status(404).json({
                success: false,
                message: 'Lobby not found',
            })
        }
        if (lobby.players.includes(playerId)) {
            return res.status(400).json({
                success: false,
                message: 'Player already in lobby',
            })
        }
        lobby.players.push(playerId)
        res.status(200).json({
            success: true,
            message: 'Player joined lobby successfully',
            data: lobby,
        })
    }
}

module.exports = LobbyController
