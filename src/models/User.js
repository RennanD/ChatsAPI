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
	bio: {
		type: String,
		require: false
	},
	connectedUsers: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	activeChats:[]
},{
	timestamps: true
})

/* Exportando nosso Model */
module.exports = model('User', UserSchema)
