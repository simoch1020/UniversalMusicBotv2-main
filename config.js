module.exports = {
  TOKEN: "",
  ownerID: ["695719063191814204", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "You", // This is bot status Write Anything here 
  activityType: "WATCHING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  CheckmarkIcon: "https://cdn.discordapp.com/attachments/1230824451990622299/1230836684774576168/7762-verified-blue.gif",
  MusicIcon:"https://media.discordapp.net/attachments/1230824451990622299/1236664581364125787/music-play.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 

   // Lavalink Server Details

  nodes: [
    {
      name: "Node #1",
      host: "37.114.42.191",
      port: 6767,
      password: "danteisnttaken",
      reconnectTimeout: 5000,
      reconnectTries: Infinity,
      secure: false

    },
 ]
}
