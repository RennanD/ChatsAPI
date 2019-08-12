const routes = require('express').Router()
const UserController = require('./controllers/UserController')
const MessegeController = require('./controllers/MessegeController')
const ChatController = require('./controllers/ChatController')

routes.get('/users', UserController.index)
routes.get('/chats', ChatController.index)
routes.get('/chats/:chatId', ChatController.show)

routes.post('/users', UserController.store)
routes.post('/chats/:targget', ChatController.store)
routes.post('/chats/:chatId/messege', MessegeController.store)


module.exports = routes