module.exports = {
  name: 'yusu',
  description: 'Just says Yusu',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (dcbot, interaction) => {
    interaction.reply('Yusu indeed');
  }
}