const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans a member from the server.',
  devOnly: true,
  // testOnly: Boolean,
  // deleted: Bool,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for ban',
      type: ApplicationCommandOptionType.String,
    }
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  callback: (dcbot, interaction) => {
    interaction.reply('ban..')
  }
}