module.exports = async (client, guild) => {
	client.users.fetch("491577179495333903").then(user => {
        user.send(`🔔 Joined: ${guild.name} (${guild.id}) - ${guild.members.cache.size} members`);
	})
}