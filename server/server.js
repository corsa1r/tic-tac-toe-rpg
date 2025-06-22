const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const UserController = require('./controllers/UserController')
const userController = new UserController()

const LobbyController = require('./controllers/LobbyController')
const lobbyController = new LobbyController()

app.use(bodyParser.json())
app.post('/user/login', userController.createLobby.bind(userController))
app.get('/lobbies', lobbyController.getLobbies.bind(lobbyController))
app.post('/lobbies/join/:id', lobbyController.joinLobbyById.bind(lobbyController))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
