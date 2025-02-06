module.exports = {
  name: 'ping',
  description: 'Pong!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (dcbot, interaction) => {
    interaction.reply(`Pong! ${dcbot.ws.ping}`);
  }
}