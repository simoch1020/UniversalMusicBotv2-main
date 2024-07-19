const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

module.exports = {
  name: "help",
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

[ /play    ] - Şarkıları çalmaya başlayın.
[ /pause   ] - Geçerli şarkıyı duraklatır.
[ /resume  ] - Geçerli şarkıyı sürdürür.
[ /lyrics  ] - Bir şarkının sözlerini görüntüler.
[ /skip    ] - Geçerli şarkıyı atlar.
[ /stop    ] - Müzik çaları yok eder.
[ /np      ] - Şu anda çalan şarkıyı gösterir.
[ /volume  ] - Oynatıcının ses seviyesini ayarlar.
[ /ping    ] - Bot gecikmesini gösterir.
[ /support ] - Destek sunucusu bilgilerini gösterir.
[ /help    ] - Bu yardım menüsünü görüntüler.
\`\`\`
      `;

      const embed = new EmbedBuilder()
        .setColor(config.embedColor)
        .setTitle(`${botName} Help`)
        .setThumbnail(client.user.displayAvatarURL()) 
        .setDescription(helpDescription)
        .setFooter({ text: `UniversalBot Music v1.0`, iconURL: client.user.displayAvatarURL() }) 
      

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};