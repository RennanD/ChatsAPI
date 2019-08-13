/* Importando o mongoose */
const mongoose = require('mongoose')

/* Ligando conexão ao banco de dados */
mongoose.connect(process.env.DB_NAME,{
	useNewUrlParser: true
})

/* Promisse mongo */
mongoose.Promisse = global.Promisse

/* Exportando conexão */

module.exports = mongoose