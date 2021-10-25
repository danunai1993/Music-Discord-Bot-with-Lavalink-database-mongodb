const { disable } = require("debug");
const { MessageEmbed, Message, Client, MessageActionRow, MessageButton } = require("discord.js");



module.exports = {
    name: "help2",
    aliases: [`h`],
    description: "Shows all available bot Commands",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
     execute: async (message, args, client, prefix) => {


        // const commands = await interaction.fetchReply();
        // commands.react('✅');

        if (!args[0]) {

            const emo = {
                home: "🏚️",
                info: "📚",
                music: "🎶",
                game: "🎮",
                setting: "⚙",
                admin: "🛠",
                close: "❌",
            }

            let disabled = null
            disabled = false;
            ////////ปุ่มมมมมมม
            let help1 = new MessageButton()
                .setCustomId('help-bot1')
                .setLabel('หน้าแรก')
                .setDisabled(disabled)
                .setEmoji(emo.home)
                .setStyle('PRIMARY')
            
            let help2 = new MessageButton()
                .setCustomId('help-bot2')
                .setLabel('คำสั่งทั่วไป')
                .setDisabled(disabled)
                .setEmoji(emo.info)
                .setStyle('PRIMARY')
            
            let help3 = new MessageButton()
                .setCustomId('help-bot3')
                .setLabel('เพลง')
                .setDisabled(disabled)
                .setEmoji(emo.music)
                .setStyle('PRIMARY')

            let help4 = new MessageButton()
                .setCustomId('help-bot4')
                .setLabel('เกม')
                .setDisabled(disabled)
                .setEmoji(emo.game)
                .setStyle('PRIMARY')

            let help5 = new MessageButton()
                .setCustomId('help-bot5')
                .setLabel('ตั้งค่าเซิร์ฟเวอร์')
                .setDisabled(disabled)
                .setEmoji(emo.setting)
                .setStyle('PRIMARY')

            let help6 = new MessageButton()
                .setCustomId('help-bot6')
                .setLabel('คำสั่งแอดมิน')
                .setDisabled(disabled)
                .setEmoji(emo.admin)
                .setStyle('PRIMARY')

            let end = new MessageButton()
                .setCustomId('help-close')
                .setLabel('ปิดการใช้งาน')
                .setDisabled(disabled)
                .setEmoji(emo.close)
                .setStyle('DANGER')
            
            
            let row1 = new MessageActionRow()
                .addComponents(help1)
                .addComponents(help2)
                .addComponents(help3)
                .addComponents(help4)

            let row2 = new MessageActionRow()
                
                .addComponents(help5)
                .addComponents(help6)
                .addComponents(end)
            ///////ปุ่ม จบ
            const rowend = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel("เชิญบอท")
                        .setStyle("LINK")
                        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
                    new MessageButton()
                        .setLabel("เว็บไซต์")
                        .setStyle("LINK")
                        .setURL("https://github.com/brblacky/lavamusic"),
                    new MessageButton()
                        .setLabel("ซัพพอร์ด")
                        .setStyle("LINK")
                        .setURL("https://discord.gg/gfcv94hDhv")
                );
                //embed ข้อความ
                const embed1 = new MessageEmbed()
                    .setTitle(`ยินดีต้อนรับเข้าสู่เมนูช่วยเหลือ `)
                    .setAuthor('LOXYBOT', 'https://www.loxybot.xyz/img/logo.png')
                    .setDescription("\n  `\`\`\`md\nหากหาความช่วยเหลือสามาเลือกดูได้เลย!!\`\`\``"
                                    + "\n เราเป็นบอทเพลงที่อำนวยความสะดวกให้กับผู้ใช้ดิสคอร์ดให้สามารถเปิดเพลงโดยไม่ต้องออกจากดิสคอร์ด บอทเราจะพัฒนาอย่างต่อเนื่องและสามารถใช้ได้ฟรีๆ!!")
                    .setImage('https://cdn.discordapp.com/attachments/863017437325557760/867742365619585034/standard.gif')
                    .setColor("#00c8ff")
                    .setFooter('LOXY - NEXTGEN', 'https://www.loxybot.xyz/img/logo.png')
                    .setTimestamp();

                const embed2 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`HELP2`);

                const embed3 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`HELP3`);

                const embed4 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`HELP4`);

                const embed5 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`HELP5`);

                const embed6 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`HELP6`);
                
                const embedend = new MessageEmbed()
                    .setColor("BLUE")
                    .setDescription("ปิดการใช้งานแล้ว")

            
            const fMsg = await message.channel.send({ embeds: [embed1], components: [row1 ,row2] });

            const filter = (interaction) => {
                // //return !interaction.user.bot && interaction.user.id == message.author.id
                // if (interaction.user.id === message.author.id) return true;
                // //interaction.stop() 
                
                
                const filter = i => i.user.id === interaccion.member.user.id;
                 if (!interaction.user.bot && interaction.user.id == message.author.id) return true;
                 //await interaction.reply({ content: `This is not your button!`, ephemeral: true })
                 return interaction.reply('Working on it'); //interaction.reply({ content: `This is not your button!`, ephemeral: true })
             }
   
            const collector = message.channel.createMessageComponentCollector({ 
                filter,
                componentType: 'BUTTON',
                time: 1000 * 60 * 5 
                //// แปลงเวลา มิลลิวิ เป็น นาที 
            });
            
            collector.on('collect', async (interaction) => {
                
                interaction.deferUpdate();
                
                if (interaction.customId == 'help-bot1') {
                    //components: [help-bot1].setD
                    fMsg.edit({ embeds: [embed1] })
                    disabled = true
                };

                if (interaction.customId == 'help-bot2') {
                    fMsg.edit({ embeds: [embed2] })
                    disabled = true
                };
                if (interaction.customId == 'help-bot3') {
                    fMsg.edit({ embeds: [embed3] })
                    disabled = true
                };
                if (interaction.customId == 'help-bot4') {
                    fMsg.edit({ embeds: [embed4] })
                    disabled = true
                };
                if (interaction.customId == 'help-bot5') {
                    fMsg.edit({ embeds: [embed5] })
                    disabled = true
                };
                if (interaction.customId == 'help-bot6') {
                    ///interaction.reply({ embeds: [embed], components: [new Discord.MessageActionRow().addComponents([buttons[1]])], ephemeral: true });
                    fMsg.edit({ embeds: [embed6] })
                    disabled = true
                };
                ///ปิดการใช้งาน
                if (interaction.customId == 'help-close'){  
                    collector.stop()                 
                    fMsg.edit({embeds: [embedend], components: [rowend]})
                };
            })

           ///time out
            collector.on('end', async (interaction) => {
                collector.stop()   
                fMsg.edit({embeds: [embedend], components: [rowend]})
            });
            

        };
    }, 
};