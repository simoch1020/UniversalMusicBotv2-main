/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "Şuanda Discord Serveri bakımda";
      const githubLink = "https://cdn.discordapp.com/attachments/1187105491835429035/1263158485332394065/standard_9.gif?ex=66993783&is=6697e603&hm=ce79a11322a835623a8224376b7df913286e002a940755fee8347a987672883d&";
      const replitLink = "https://cdn.discordapp.com/attachments/1187105491835429035/1263158485332394065/standard_9.gif?ex=66993783&is=6697e603&hm=ce79a11322a835623a8224376b7df913286e002a940755fee8347a987672883d&";
      const youtubeLink = "https://cdn.discordapp.com/attachments/1175120971062054964/1216389879093792939/standard_5.gif?ex=6699245a&is=6697d2da&hm=ec71d8276e7295c8b77bc9176c4742ee09a974f1706fce65dcfb58c2f169becc&";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216388828411990066/standard_2.gif?ex=66992360&is=6697d1e0&hm=788908c77c87315ff6c1e70670d6b6ad098a00f39924ae9487e78e47fcc0f4e8&', 
              url: 'https://cdn.discordapp.com/attachments/1175120971062054964/1216389879093792939/standard_5.gif?ex=6699245a&is=6697d2da&hm=ec71d8276e7295c8b77bc9176c4742ee09a974f1706fce65dcfb58c2f169becc&'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1175120971062054964/1216391019960991825/standard_6.gif?ex=6699256a&is=6697d3ea&hm=c8d97c97c45785d6e1ab8aad3c534c5d98d22fbf020b46555dc7809ae5a3a360&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
