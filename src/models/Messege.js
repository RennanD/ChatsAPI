/* Importando o banco mongo */
const {model, Schema} = require('../mongoose')

/* Construindo nosso Model */
const MessegeSchema = new Schema({
	
    id: {
        type: String,
        required: true
    },
	name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true
    },
	
	content: {
		type:String,
		required: true
	},
},{
    timestamps: true
})

/* Exportando nosso Model */
module.exports = model('Messege', MessegeSchema)
