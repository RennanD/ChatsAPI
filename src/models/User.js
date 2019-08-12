/* Importando o banco mongo */
const mongoose = require('mongoose')

/* Construindo nosso Model */
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	name: {
		type:String
	}
	
},{

})

/* Exportando nosso Model */
mongoose.model('User', UserSchema)
