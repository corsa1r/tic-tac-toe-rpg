const uuid = require('uuid')
const database = require('../database/Database')
const Lobby = require('../models/Lobby.model')

class UserController {
    createLobby(req, res) {
        const { name } = req.body
        const userId = uuid.v4()
        const lobbyId = uuid.v4()
        const lobby = new Lobby(lobbyId, name, userId)
        database.lobbies.push(lobby)

        res.status(200).json({
            success: true,
            message: 'Lobby created successfully',
            data: lobby,
        })
    }
}

module.exports = UserController