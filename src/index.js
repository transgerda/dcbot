require('dotenv').config();
const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, IntentsBitField, ButtonStyle  } = require('discord.js');

const dcbot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

dcbot.on('messageCreate', (msg) => {
  console.log(`🗨️  ${msg}`);
})

dcbot.on('ready', () => {
  console.log('✅ The bot is ready')
})

dcbot.on('interactionCreate', (interaction) =>  {
  if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'yusu') {
      interaction.reply('Yusu indeed');
    }
  
    if (interaction.commandName === 'prompt') {
      interaction.reply(interaction.options.get('prompt').value);
    }
  })

 
dcbot.on('interactionCreate', async (interaction) => {
  const allRolls = ['1336401515493068883', '1336402852159029370','1336402877027188848', '1336402908614361118', '1336402949726797996'];
  
  try {
    if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true });
    
    const customId = interaction.customId;

    if (customId === '0') {
      allRolls.forEach(async (role) => {
        await interaction.member.roles.remove(allRolls);
      })
      await interaction.editReply(`Alle roles zijn verwijderd van je profiel`);
      return;
    };
    
    if (customId === '1') {
      allRolls.forEach(async (role) => {
        await interaction.member.roles.add(allRolls);
      })
      await interaction.editReply(`Alle roles zijn toegevoegd aan je profiel`);
      return;
    };
    
    const role = interaction.guild.roles.cache.get(interaction.customId);

    if (!role) { 
      interaction.editReply({
        content: 'Kan het vak niet vinden! vertel Martijn',
      })
      return;
    }

    const hasRole = interaction.member.roles.cache.has(role.id);
    
    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`${role.name} is verwijderd van je profiel.`);
      return;
    }
  
    await interaction.member.roles.add(role);
    await interaction.editReply(`${role.name} is toegevoegd aan je profiel.`);
  } catch (e) {
    console.log(e);
  }
})

dcbot.login(process.env.TOKEN);