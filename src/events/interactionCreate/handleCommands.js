const { devs, server } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands')

module.exports = async (dcbot, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands();

  try {
    const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);

    if (!commandObject) return;

    if (commandObject.devOnly) {
      if (!devs.includes(interaction.member.id)) {
        interaction.reply({
          content: 'Only developers are allowed to run this command',
          ephemeral: true,
        });
        return;
      }
    }

    if (commandObject.testOnly) {
      if (!devs.includes(interaction.member.id)) {
        interaction.reply({
          content: 'This command can not be ran here.',
          ephemeral: true,
        });
        return;
      }
    }

    if (commandObject.permissionsRequired?.length) {
      for (const permission of commandObject.permissionsRequired) {
        if (!interaction.member.permission.has(permission)) {

          interaction.reply({
            content: `You don't have the right permissions.`,
            ephemeral: true,
          });
          break;
        }
      }
    }

    if (commandObject.botPermissions?.length) {
      for (const permission of commandObject.botPermissions) {
        const bot = interaction.guild.member.me;

        if (!bot.permission.has(permission)) {
          interaction.reply({
            content: `I don't have the right permissions.`,
            ephemeral: true,
          });
          break;
        }
      }
    }

    await commandObject.callback(dcbot, interaction);
  } catch (error) {
    console.log(`❌ There was an error running this command: ${error}`)
  }
};