/* Importando o banco mongo */
const {model, Schema} = require('../mongoose')

/* Construindo nosso Model */
const MessegeSchema = new Schema({
	
    author: {
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
