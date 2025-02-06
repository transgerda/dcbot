module.exports = async (dcbot, guildId) => {
  let applicationCommands;

  if (guildId) {
    const guild = await dcbot.guilds.fetch(guildId);
    applicationCommands = guild.commands;
  } else {
    applicationCommands = await dcbot.application.commands;
  }

  await applicationCommands.fetch();
  return applicationCommands;
}