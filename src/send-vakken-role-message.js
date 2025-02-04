require('dotenv').config();
const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { Client, IntentsBitField, ButtonStyle  } = require('discord.js');
const { compileFunction } = require('vm');

const dcbot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

const roles = [
  {
    id: '1336401515493068883',
    label: 'php',
  },
  {
    id: '1336402852159029370',
    label: 'oop',
  },
  {
    id: '1336402877027188848',
    label: 'frontend-wdv',
  },
  {
    id: '1336402908614361118',
    label: 'javascript',
  },
  {
    id: '1336402949726797996',
    label: 'databases',
  },
];

const rolesAction = [
  {
    id: '1',
    label: 'allemaal!',
  },
  {
    id: '0',
    label: 'geen!',
  },
]

dcbot.on('ready', async (c) => {
  try {
    const channel = await dcbot.channels.cache.get('1336404102590107778');
    if (!channel) return;

    const row = new ActionRowBuilder();
    const specialRow = new ActionRowBuilder();

    
    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
      )
    })
    
    rolesAction.forEach((role) => {
      specialRow.components.push(
        new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Danger)
      )
    })
    
    await channel.send({
      content: 'Kies je favoriete vakken hieronder hieronder',
      components: [row, specialRow],
    });
    
    console.log('✅ Roles message send')

    process.exit();
  } catch (e) {
    console.log(e);
  }
});

dcbot.login(process.env.TOKEN);