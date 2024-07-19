const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

module.exports = {
  name: "Yardım",
  description: "Bot hakkında bilgi alın",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const botName = client.user.username; 

      const helpDescription = `
\`\`\`css
Hoşgeldin ${botName}!

Discord'daki nihai müzik arkadaşınız. İşte mevcut komutlar:

[ /Oynat      ] - Şarkıları çalmaya başlayın.
[ /Duraklat   ] - Geçerli şarkıyı duraklatır.
[ /Sürdür     ] - Geçerli şarkıyı sürdürür.
[ /Şarkı Sözü ] - Bir şarkının sözlerini görüntüler.
[ /Atla       ] - Geçerli şarkıyı atlar.
[ /Durdur     ] - Müzik çaları yok eder.
[ /np         ] - Şu anda çalan şarkıyı gösterir.
[ /Ses        ] - Oynatıcının ses seviyesini ayarlar.
[ /Gecikme    ] - Bot gecikmesini gösterir.
[ /Destek     ] - Destek sunucusu bilgilerini gösterir.
[ /Yardım     ] - Bu yardım menüsünü görüntüler.
\`\`\`
      `;

      const embed = new EmbedBuilder()
        .setColor(config.embedColor)
        .setTitle(`${botName} Yardım`)
        .setThumbnail(client.user.displayAvatarURL()) 
        .setDescription(helpDescription)
        .setFooter({ text: `UniversalBot Music v1.0`, iconURL: client.user.displayAvatarURL() }) 
      

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};