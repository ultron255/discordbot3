const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#"

client.on("ready", () => {
client.user.setActivity(`s!help | s!nitro`, {type: "PLAYING"}); 
});

const embed = new Discord.MessageEmbed()

client.on("message", message => {
  if (message.content.startsWith(`${prefix}updates minecraft`)) {
    const help = new Discord.MessageEmbed()
      .setFooter(
        `command by ${message.author.username}`,
        message.author.avatarURL
      )
      .setFooter("MineCraft Updates Java")
      .setTimestamp()

      
      .setColor("#FF4500")
      .setAuthor("Help Commands")
      .setDescription(
        "1.16, the first release of the Nether Update, is a major update to Java Edition announced at MINECON Live 2019[1] and released on June 23, 2020.[2] This update overhauls the Nether by adding four new biomes, four new mobs (the piglin, hoglin, zoglin, and strider), and a multitude of new blocks, including many variants of blackstone as well as the respawn anchor used to set the player's spawnpoint in the Nether. It also adds a new netherite tier of equipment, obtained through ancient debris found rarely throughout the Nether."
);
    message.channel.send(embed);
  }
});


client.on("error", err => console.log(err));
client.on("ready", () => {
  console.log("Bot was logged in"); // Output a message to the logs.
client.login("NzMwMTE0MzkwMDM2MzE2MjUx.XwVtSg.bH5nzubKeoarLcff28YoULantt8")
});
