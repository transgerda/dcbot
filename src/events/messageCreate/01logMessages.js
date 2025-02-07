module.exports = (client, message) => {
    console.log(`🗨️  ${message.channel.name} --> ${message.member.displayName} -->\t${message}`);
}