const { Client, LocalAuth } = require('whatsapp-web.js');
const { Collection } = require('discord.js')

const client = new Client({
    authStrategy: new LocalAuth()
});

module.exports = client;

client.commands = new Collection();
client.events = new Collection();

require("./Handler")(client);

client.initialize();