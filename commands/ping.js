const { EmbedBuilder } = require('discord.js')
const config = require("../config.js");

module.exports = {
  name: "gecikme",
  description: "bot gecikme süresini kontrol edin.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {


    try {

      const start = Date.now();
      interaction.reply("Gecikme....").then(msg => {
        const end = Date.now();
        const embed = new EmbedBuilder()
          .setColor(config.embedColor)
          .setTitle(`Bot Gecikmesi`)
          .setDescription(`**Pong** : ${end - start}ms`)
        return interaction.editReply({ embeds: [embed] }).catch(e => { });
      }).catch(err => { })

    } catch (e) {
    console.error(e); 
  }
  },
};