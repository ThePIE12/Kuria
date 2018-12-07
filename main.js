const Commando = require('discord.js-commando')
const fs = require('fs');
var dotenv = require('dotenv')
dotenv.load()


var config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const bot = new Commando.Client(config)
const token = config.token

bot.registry.registerGroup('random', 'Random')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + '/commands')

bot.on('message', (message) => {
	const channel = message.channel
	if (message.content.toLowerCase() == 'hello kuria') {
		channel.send(`Hello ${message.author}...`)
	}

	else if (message.content.toLowerCase() == 'nurupo') {
		channel.send('Gah!')
	}
})

bot.on('ready', () => {
	console.log("Ready!")
})

bot.login(process.env.TOKEN)
