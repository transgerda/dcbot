require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'yusu',
    description: 'Just says Yusu',
  },
  {
    name: 'prompt',
    description: 'Give a prompt that will go to chat-gpt',
    options: [
      {
        name: 'prompt',
        description: 'Prompt for chat-gpt',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
];

const rest = new REST ({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...')

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    )

    console.log('Slash commands were registered succesfully')
  } catch (e) {
    console.log(`❌ ${e}`);
  }
})();