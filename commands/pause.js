const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

async function pause(client, interaction) {
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

        player.pause(true);

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setDescription('**⏸️ Oynatma işlemi duraklatıldı!**');

        await interaction.reply({ embeds: [embed] });

    } catch (error) {
        console.error('Duraklatma komutu işlenirken hata oluştu:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Hata')
            .setDescription('❌ İsteğiniz işlenirken bir hata oluştu.');

        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
}

module.exports = {
    name: "Duraklat",
    description: "Geçerli şarkıyı duraklatır.",
    permissions: "0x0000000000000800",
    options: [],
    run: pause
};
