require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const dcbot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

eventHandler(dcbot);

dcbot.login(process.env.TOKEN);