/* Importando o banco mongo */
const {model, Schema} = require('../mongoose')

/* Construindo nosso Model */
const UserSchema = new Schema({
	user: {
		type: String,
		required: true,
	},
	name: {
		type:String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	},
	connectedUsers: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	activeChats:[{
		type: Schema.Types.ObjectId,
		ref: 'Chat'
	}]
},{
	timestamps: true
})

/* Exportando nosso Model */
module.exports = model('User', UserSchema)
