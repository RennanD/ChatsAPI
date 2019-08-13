/* Importando nosso Model */
const Chat = require('../models/Chat')
const User = require('../models/User')

/* Exportando nosso Controller */
module.exports = {

	async index(req, res){
		const { user } = req.headers
		const loggedUser = await User.findById(user)
		try {
			const chats = await Chat.find({
				$and: [
					{_id: {$in: loggedUser.activeChats}}
				]
			})

			if(chats.length <= 0) return res.status(404).json({msg: 'Nenhum chat encontrado!'})

			return res.json(chats)
		} catch(err) {
			console.log(err)
			return res.status(400).json({msg: 'Você está desconectado!'})
		}
		
		
	},

	async show(req, res){
		const { chatId } = req.params
		const chat = await Chat.findById(chatId).populate('messeges')

		return res.json(chat)
	},

	async store(req, res){
		const { user } = req.headers
		const { targget } = req.params

		try {
			const authorChat = await User.findById(user)
			const targgetChat = await User.findById(targget)

			if(user === targget){
				return res.status(400).json({
					error: 'Você não pode entar convsersar com seu próprio usuário'
				})
			}

			if(authorChat.connectedUsers.includes(targget)){
				return res.status(201).json({msg: 'Já existe um chat iniciado com este usuário'})
			}
			const chat = await Chat.create({})
			
			authorChat.connectedUsers.push(targget)
			authorChat.activeChats.push(chat._id)
			await authorChat.save()

			targgetChat.connectedUsers.push(user)
			targgetChat.activeChats.push(chat._id)
			await targgetChat.save()
			
			chat.users.push(authorChat,targgetChat)
			await chat.save()

			return res.json(chat)

		} catch(err) {
			return res.status(400).json({error: 'é preciso pelo menos dois usuários por chat!'})
		}
	},

	async destroy(req, res){
		
	}
}
