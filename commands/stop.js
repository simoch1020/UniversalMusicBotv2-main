const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

async function stop(client, interaction) {
    try {
        const player = client.riffy.players.get(interaction.guildId);

        if (!player) {
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('❌ Aktif oyuncu bulunamadı.');

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
            return;
        }

        player.stop();
        player.destroy();

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setDescription('**⏹️ Oynatma durduruldu ve oynatıcı yok edildi!**');

        await interaction.reply({ embeds: [embed] });

    } catch (error) {
        console.error('Error processing stop command:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Hata')
            .setDescription('❌ Aktif oyuncu bulunamadı. ');

        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
}

module.exports = {
    name: "stop",
    description: "Geçerli şarkıyı durdurun ve oynatıcıyı yok edin.",
    permissions: "0x0000000000000800",
    options: [],
    run: stop
};
