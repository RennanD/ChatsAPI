
const User = require('../models/User')
const axios = require('axios')
const api = process.env.EXTERNAL_API
/* Exportando nosso Controller */
module.exports = {

	async index(req, res){

		const { user } = req.headers

		try{
            const users = await User.find({
                $and:[
                    {_id: {$ne: user}},
                ]
            })

            return res.json(users)

        } catch(err){
            return res.status(400).json({error: 'Failed!'})
        }
    },
    
    async show (req,res) {
        const { id } = req.params
        try {
            const user = await User.findById(id)
            return res.json(user)
        } catch (err) {
            res.status(404).json({error: 'Usuário não encontrado'})
        }

        
    },

	async store(req, res){

		const { username } = req.body

		try {
			const userExixits = await User.findOne({user: username})

			if(userExixits) return res.json(userExixits)

			const response = await axios.get(`${api}/${username}`)
            const {name,  avatar_url: avatar} = response.data
            const user = await User.create({
                name, 
                user: username,
                avatar,
                bio
            })

            req.io.emit('user',user)
			return res.status(201).json(user)
        
        } catch(err) {

			return res.status(400).json({error: 'Usuário não encontrado'})
		}
	},
}
