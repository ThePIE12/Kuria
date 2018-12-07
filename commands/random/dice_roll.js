const Commando = require('discord.js-commando');

class DiceRoll extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'dice',
			group: 'random',
			memberName: 'dice',
			description: 'Rolls a dice, landing on 1-6'
		});
	}

	async run(message, args) {
		var roll = Math.floor(Math.random() * 6) + 1;
		if (roll >= 1 || roll <= 6) {
			message.channel.send(`The dice landed on ${roll}`);
		}
		else {
			message.channel.send("Something went wrong...");
		}
	}
}

module.exports = DiceRoll;
