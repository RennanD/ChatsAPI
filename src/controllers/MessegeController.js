/* Importando nosso Model */
const Messege = require('../models/Messege')
const User = require('../models/User')
const Chat = require('../models/Chat')

/* Exportando nosso Controller */
module.exports = {

	async store(req, res){
		const { user } = req.headers
		const { chatId } = req.params
		const { content } = req.body

		const author = await User.findById(user)
		const chat = await Chat.findById(chatId)
		

		try {
			const messege = await Messege.create({
				author: author._id,
				content		
			})
			chat.messeges.push(messege)
			await chat.save()
			
			req.io.sockets.in(chat._id).emit('messege',messege)

			return res.json(chat)
		} catch(err) {
			return res.status(400).json({error: 'Não foi possível enviar a mensagem!'})
		}
	},
}
