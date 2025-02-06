module.exports = async (dcbot, interaction) => {
  const allRolls = ['1336401515493068883', '1336402852159029370','1336402877027188848', '1336402908614361118', '1336402949726797996'];
  
  try {
    // if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true });
    
    const customId = interaction.customId;

    // if 'geen!' is clicked then remove all roles
    if (customId === '0') {
      allRolls.forEach(async (role) => {
        await interaction.member.roles.remove(allRolls);
      })
      await interaction.editReply(`Alle roles zijn verwijderd van je profiel`);
      return;
    };
    
    // if 'allemaal!' is clicked then add all roles
    if (customId === '1') {
      allRolls.forEach(async (role) => {
        await interaction.member.roles.add(allRolls);
      })
      await interaction.editReply(`Alle roles zijn toegevoegd aan je profiel`);
      return;
    };
    
    const role = interaction.guild.roles.cache.get(interaction.customId);
    // check if the role exist or if it isn't removed
    if (!role) { 
      interaction.editReply({
        content: 'Kan het vak niet vinden! vertel Martijn',
      })
      return;
    }    
    
    // if the member already has the role then remove it
    const hasRole = interaction.member.roles.cache.has(role.id);
    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`${role.name} is verwijderd van je profiel.`);
      return;
    } else {
      // else add it 
      await interaction.member.roles.add(role);
      await interaction.editReply(`${role.name} is toegevoegd aan je profiel.`);
    }
  } catch (e) {
    console.log(e);
  }
}