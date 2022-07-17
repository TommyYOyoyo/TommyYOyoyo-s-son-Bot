// All commands modules

module.exports = {
    kill: function ({
        arg,
        message
    }) {
        var target = arg.slice("kill".length + 1, message.content.indexOf(">") - 3)
        if (!target.startsWith("<@") && !target == "") {
            message.reply("The user you wanted to kill is not a valid user.")
            return;
        }
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
    },

    resurrect: function ({
        arg,
        message
    }) {
        var target = arg.slice("resurrect".length + 1, message.content.indexOf(">") - 3)
        console.log(target)
        if (!target.startsWith("<@") && !target == "") {
            message.reply("The user you wanted to resurrect is not a valid user.")
            return;
        }
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
}
