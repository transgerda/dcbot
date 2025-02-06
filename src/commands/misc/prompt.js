const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'prompt',
  description: 'Give a prompt that will go to chat-gpt',
  options: [
    {
      name: 'prompt',
      description: 'Prompt for chat-gpt',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (dcbot, interaction) => {
    interaction.reply(interaction.options.get('prompt').value);
  }
}