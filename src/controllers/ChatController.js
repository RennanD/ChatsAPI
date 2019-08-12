/* Importando nosso Model */
const Chat = require('../models/Chat')
const User = require('../models/User')

/* Exportando nosso Controller */
module.exports = {

	async index(req, res){
		
		const chats = await Chat.find().populate('users')
		return res.json(chats)
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

			if(authorChat.activeChats.includes(targget)){
				return res.status(201).json({msg: 'Já existe um chat iniciado com este usuário'})
			}

			authorChat.activeChats.push(targget)
			await authorChat.save()
			
			targgetChat.activeChats.push(user)
			await targgetChat.save()

			const chat = await Chat.create({})

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
