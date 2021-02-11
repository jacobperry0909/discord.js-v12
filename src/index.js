const zoroUtils = require('zoro-utils');
const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require('../config.json');

new zoroUtils.handler(Client, {
	commands: './commands',
	events: './events',
	commandTable: false,
}).setPrefix(config.prefix);

Client.login(config.token);
