const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const config = require("../config.js");

async function volume(client, interaction) {
    try {
        const player = client.riffy.players.get(interaction.guildId);
        const volume = interaction.options.getInteger('level');

        if (!player) {
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('❌ Aktif oyuncu bulunamadı.');

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
            return;
        }

        if (volume < 0 || volume > 100) {
            return interaction.reply({ content: 'Ses seviyesi 0 ile 100 arasında olmalıdır.', ephemeral: true });
        }

        player.setVolume(volume);

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setDescription(`🔊 Ses seviyesi şu şekilde ayarlandı **${volume}%**`);

        return interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error('Error setting volume:', error);
        await interaction.reply({ content: 'Birim ayarlanırken bir hata oluştu.', ephemeral: true });
    }
}

module.exports = {
    name: "volume",
    description: "Geçerli şarkının ses seviyesini ayarlar",
    permissions: "0x0000000000000800",
    options: [{
        name: 'level',
        description: 'Ses seviyesi (0-100)',
        type: ApplicationCommandOptionType.Integer,
        required: true
    }],
    run: volume
};
