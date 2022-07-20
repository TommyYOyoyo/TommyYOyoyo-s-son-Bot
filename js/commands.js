// All commands modules

require('dotenv').config()

nukeGifLinks = ["https://media4.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=ecf05e47zdtvnaelkh2v9kf6prkovyzmz6z37k8vou6y2bnw&rid=giphy.gif&ct=g",
"https://media4.giphy.com/media/HhTXt43pk1I1W/200w.webp?cid=ecf05e47jxy10pummvcwov6ash03uu89q52aaziefihqjpvx&rid=200w.webp&ct=g",
"https://media2.giphy.com/media/xUPGGePcEyYvkS75ew/200w.webp?cid=ecf05e4708xeboosknn2ym9t9osrr2dtgu5te0qpdlb7lb7y&rid=200w.webp&ct=g",
"https://media0.giphy.com/media/XevXoNu5WZxe0/200.webp?cid=ecf05e4708xeboosknn2ym9t9osrr2dtgu5te0qpdlb7lb7y&rid=200.webp&ct=g",
"https://media.discordapp.net/attachments/860285099832639491/998418051890425977/unknown.gif",
"https://media.discordapp.net/attachments/860285099832639491/998418069095448616/unknown.gif"]

module.exports = {
    kill: function ({
        arg,
        message
    }) {
        if (message.content.indexOf(">") == -1){
            message.reply("The user you wanted to kill is not a valid user. Please use the format: 'tys kill TARGET'.")
            return;
        }
        var target = arg.slice("kill".length + 1, message.content.indexOf(">") - 3)
        console.log(target)
        if (!target.startsWith("<@") && !target == "") {
            message.reply("The user you wanted to kill is not a valid user. Please use the format: 'tys kill TARGET'.")
            return;
        } else {
            if (target == "") {
                var target = `${message.author}`
                message.reply(`${message.author} suicided.`);
                return;
            }
            var randnum = Math.floor(Math.random() * 100)
            if (randnum > 50 && randnum <= 100) {
                message.reply(`${message.author} blow off the head of ${target} with a shotgun, oof `)
            } else if (randnum > 20 && randnum <= 50) {
                message.reply(`${target} walked away before ${message.author} could kill him `)
            } else {
                message.reply(`${message.author} accidently put a carrot in his shotgun and killed himself. `)
            }
            return;
        }
    },

    resurrect: function ({
        arg,
        message
    }) {
        var target = arg.slice("resurrect".length + 1, message.content.indexOf(">") - 3)
        if (!target.startsWith("<@") && !target == "") {
            message.reply("The user you wanted to resurrect is not a valid user. Please use the format 'tys resurrect TARGET'.")
            return;
        } else {
            if (target == "") {
                var target = `${message.author}`
            }
            var randnum = Math.floor(Math.random() * 100)
            if (randnum > 30 && randnum <= 100) {
                message.reply(`${target} was brought back to the world by an angel :innocent: `)
            } else if (randnum > 20 && randnum < 30) {
                message.reply(`${target} was not resurrected because no angels are working rn. :joy: `)
            } else {
                message.reply(`${target} landed back to the world in a volcano and burned alive :crying_cat_face: `)
            }
            return;
        }
    },
    nuke : function ({
        arg,
        message,
        originalArg
    }) {
        var place = originalArg.slice("nuke".length + 1)
        
        if (place == "") {
            var place = `${message.author}'s house`
        }
        var randnum = Math.floor(Math.random() * 100)
        if (randnum > 50 && randnum <= 90) {
            message.reply(`${message.author} dropped a nuke to ${place}, TOTAL DESTRUCTION! \nPOV ${place}: ${nukeGifLinks[Math.floor(Math.random() * nukeGifLinks.length)]}`)
            //message.reply(`POV ${place}: ${nukeGifLinks[Math.floor(Math.random() * nukeGifLinks.length)]}`)
        } else if (randnum > 20 && randnum < 30) {
            message.reply(`${message.author} tried to drop a nuke but the Navy intercepted him. **WHAT A KARMA!**`)
        } else if (randnum > 30 && randnum <= 49){
            message.reply(`${message.author} dropped the nuke to ${place} but the malprogrammed nuke flew back to his plane. **TO BE CONTINUE...**`)
        } else if (randnum > 90 && randnum <= 100){
            message.reply(`${message.author} dropped the nuke to ${place} but everyone there magically survived! **MAGIK!** \nPOV ${place}: https://c.tenor.com/8gpittE_R9oAAAAM/running-dodging.gif`)
            //message.reply(`POV ${place}: https://c.tenor.com/8gpittE_R9oAAAAM/running-dodging.gif`)
        } else {
            message.reply(`Bro stop dreaming nukes and go get a job man :joy:`)
        }
    }
}
