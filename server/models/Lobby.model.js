class Lobby {
    constructor(id, name, ownerId) {
        this.id = id
        this.name = name
        this.ownerId = ownerId
        this.players = [ownerId]
        this.playerTurn = ownerId
        this.gameStarted = false
        this.gameOver = false
        this.winner = null
        this.createdAt = Date.now()
    }

    addPlayer(player) {
        if (!this.players.includes(player)) {
            this.players.push(player)
        }
    }
}

module.exports = Lobby
