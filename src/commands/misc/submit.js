const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Pong!',
  devOnly: true,
  options: [
    {
      name: 'weeknr',
      description: 'This is the weeknumber of the excersize you want to submit.',
      type: ApplicationCommandOptionType.Integer,
      required: true,
    }
  ],
  callback: async (client, interaction) => {
    
  },
}