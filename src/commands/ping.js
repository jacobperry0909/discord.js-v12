module.exports = {
	name: 'ping',
	description: 'get the bot ping',
	async execute({ message, client }) {
		const msg = await message.channel.send(`Calculating...`);
		const ping = msg.createdTimestamp - message.createdTimestamp;
		msg.edit(`Server ping: \`${ping}\`. API ping: \`${client.ws.ping}\``);
	},
};
