const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

async function skip(client, interaction) {
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

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setDescription('**⏭️ Oyuncu bir sonraki şarkıyı çalacak!**');

        await interaction.reply({ embeds: [embed] });

    } catch (error) {
        console.error('Error processing skip command:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Hata')
            .setDescription('❌ İsteğiniz işlenirken bir hata oluştu.');

        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
}

module.exports = {
    name: "skip",
    description: "Geçerli şarkıyı atlar.",
    permissions: "0x0000000000000800",
    options: [],
    run: skip
};
