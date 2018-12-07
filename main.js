const Commando = require('discord.js-commando')
const fs = require('fs');
const http = require('http');
const dotenv = require('dotenv')
dotenv.load()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

let server = http.createServer()

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

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
