// All commands modules

const {Client, Intents, MessageEmbed} = require('discord.js')

require('dotenv').config()

var nukeGifLinks = ["https://c.tenor.com/giN2CZ60D70AAAAC/explosion-mushroom-cloud.gif",
    "https://c.tenor.com/YE_vkc5cRxUAAAAM/kaboom-boom.gif",
    "https://c.tenor.com/h4n4Y_HfjhMAAAAM/haha-bongo-cat.gif",
    "https://c.tenor.com/EkW1bQdRl2MAAAAC/explodinghehemwhaha.gif",
    "https://media.discordapp.net/attachments/860285099832639491/998418051890425977/unknown.gif",
    "https://media.discordapp.net/attachments/860285099832639491/998418069095448616/unknown.gif"
]

module.exports = {
    kill: function ({
        arg,
        message
    }) {
        if (arg.indexOf(">") == -1 && arg.slice("kill".length + 1) != "") {
            message.reply("The user you wanted to kill is not a valid user. Please use the format: 'tys kill TARGET'.")
            return;
        } else {
            let target = arg.slice("kill".length + 1, message.content.indexOf(">") - 3)
            if (target == "") {
                target = `${message.author}`
                message.reply(`${message.author} suicided.`);
                return;
            }
            if (target.startsWith('<@')) {
                let randnum = Math.floor(Math.random() * 100)
                if (randnum > 50 && randnum <= 100) {
                    message.reply(`${message.author} blow off the head of ${target} with a shotgun, oof `)
                } else if (randnum > 20 && randnum <= 50) {
                    message.reply(`${target} walked away before ${message.author} could kill him `)
                } else {
                    message.reply(`${message.author} accidently put a carrot in his shotgun and killed himself. `)
                }
                return;
            }
        }
    },

    resurrect: function ({
        arg,
        message
    }) {
        if (arg.indexOf(">") == -1 && arg.slice("resurrect".length + 1) != "") {
            message.reply("The user you wanted to resurrect is not a valid user. Please use the format: 'tys resurrect TARGET'.")
            return;
        } else {
            let target = arg.slice("resurrect".length + 1, message.content.indexOf(">") - 3)
            if (target == "") {
                target = `${message.author}`
            }
            if (target.startsWith('<@')) {
                let randnum = Math.floor(Math.random() * 100)
                if (randnum > 30 && randnum <= 100) {
                    message.reply(`${target} was brought back to the world by an angel :innocent: `)
                } else if (randnum > 20 && randnum < 30) {
                    message.reply(`${target} was not resurrected because no angels are working rn. :joy: `)
                } else {
                    message.reply(`${target} landed back to the world in a volcano and burned alive :crying_cat_face: `)
                }
                return;
            } else {
                return;
            }
        }
    },
    nuke: function ({
        arg,
        message,
        originalArg
    }) {
        let place = originalArg.slice("nuke".length + 1)

        if (place == "") {
            place = `${message.author}'s house`
        }
        let randnum = Math.floor(Math.random() * 100)
        let img = undefined

        let reply = ""
        if (randnum > 50 && randnum <= 90) {
            reply = `${message.author} dropped a nuke to ${place}, TOTAL DESTRUCTION! \n\nPOV ${place}:`
            img = `${nukeGifLinks[Math.floor(Math.random() * nukeGifLinks.length)]}`
        } else if (randnum > 20 && randnum < 30) {
            reply = `${message.author} tried to drop a nuke but the Navy intercepted him. **WHAT A KARMA!**`
        } else if (randnum > 30 && randnum <= 49) {
            reply = (`${message.author} dropped the nuke to ${place} but the malprogrammed nuke flew back to his plane. **TO BE CONTINUE...**`)
        } else if (randnum > 90 && randnum <= 100) {
            reply = (`${message.author} dropped the nuke to ${place} but everyone there magically survived! **MAGIK!** \n\nPOV ${place}:`)
            img = "https://c.tenor.com/8gpittE_R9oAAAAM/running-dodging.gif"
        } else {
            reply = (`Bro stop dreaming nukes and go get a job man :joy:`)
        }
        let nukeMsg = new MessageEmbed()
        .setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
        .setTitle(`${message.author.username}'s nuking process...`)
        .setDescription(`${reply}`)
        .setImage(img)

        message.reply({embeds: [nukeMsg]})
    }
}
