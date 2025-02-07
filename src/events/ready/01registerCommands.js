const { server } = require('../../../config.json');
const areCommandDifferent = require('../../utils/areCommandDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands')

module.exports = async (dcbot) => {
  const localCommands = getLocalCommands();

  try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(dcbot, server);

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.edit(existingCommand.id);
          console.log(`🗑️ Deleted command "${name}".`);
          continue;
        }

        if (areCommandDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options,
          });

          console.log(`🔄 Edited command "${name}"`)
        }
      } else {
        if (localCommand.deleted) {
          console.log(`➡️ Skipping registering command "${name}" as it's set to delete.`);
          continue;
        }

        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(`👍 Registered command "${name}".`)
      }
    }
  } catch (error) {
    console.log(`❌ There was an error: ${error}`)
  }
}