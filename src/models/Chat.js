/* Importando o banco mongo */
const { model, Schema } = require('../mongoose')

/* Construindo nosso Model */
const ChatSchema = new Schema({
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	messeges: [{
		type: Schema.Types.ObjectId,
		ref: 'Messege'
	}]
},{
	timestamps: true
})

/* Exportando nosso Model */
module.exports = model('Chat', ChatSchema)
