const Commando = require('discord.js-commando');

class CoinFlip extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'flip',
			group: 'random',
			memberName: 'flip',
			description: 'Flips a coin, landing on either Heads or Tails'
		});
	}

	async run(message, args) {
		var chance = Math.floor(Math.random() * 2);
		var results = ["Heads", "Tails"];
		if (chance == 0 || chance == 1) {
			message.channel.send(`The coin landed on ${results[chance]}`);
		}
		else {
			message.channel.send("Something went wrong...");
		}
	}
}

module.exports = CoinFlip;
