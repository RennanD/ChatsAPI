/* Importando o mongoose */
const mongoose = require('mongoose')

/* Ligando conexão ao banco de dados */
mongoose.connect('mongodb://127.0.0.1:27017/whatsapplocal',{
	useNewUrlParser: true
})


/* Promisse mongo */
mongoose.Promisse = global.Promisse

/* Exportando conexão */

module.exports = mongoose