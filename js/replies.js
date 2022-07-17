// Replies

let shutReplies = ["ok", "no", "no you", "umm", ".", "_ _", "*😏*"]
let hikiddoReplies = ["Hi old man.", "Hey!!!", "hi, kim jong-un", "go away i hate you", "hi, joe biden"]
let heykidReplies = ["go away", 'hi, "adult"', "Don't call me a kid :(((", "Hello I want another babysitter ouainnnnnnnn..."]
let havefunReplies = ["I want another babysitter ouainnnnnnnn...", "I dont like you go away", "YEETTTT"]
let stfuReplies = ["no you.", "ok", "nah im never going to stfu its literally impossible", "no pls", "nah sry"]
let meanReplies = ["yes!", "meaaan!", "👎", "👍", "nah", "agreed", "disagreed."]
let lmaoReplies = ["yessir", "👍", "LMFAOO", "yes, lol!", "LOLLL", "_ _", "...", "🤔", "**LMAO**", "bro", "LOL", "LMFAO"]

module.exports = {
    whosmomReply: function (message) {
        message.reply("Suuuuuuuri!!! <3");
    },
    whosdadReply: function (message) {
        message.reply("Tommmmmyyyyyyy!!! <3");
    },
    shutupReply: function (message) {
        message.reply(shutReplies[Math.floor(Math.random() * shutReplies.length)]);
    },
    stfuReply: function (message) {
        message.reply(stfuReplies[Math.floor(Math.random() * stfuReplies.length)]);
    },
    meanReply: function (message) {
        message.reply(meanReplies[Math.floor(Math.random() * meanReplies.length)]);
    },
    joyReply: function (message) {
        message.reply("😂😂😂");
    },
    babeReply: function (message) {
        message.reply("hello there~~~")
    },
    hikidReply: function (message) {
        var hkreply = heykidReplies[Math.floor(Math.random() * heykidReplies.length)]
        if (hkreply == heykidReplies[3]) {
            if (message.author != process.env.BABYSIT) {
                var hkreply = heykidReplies[Math.floor(Math.random() * heykidReplies.length) - 1]
            } else {
                var hkreply = hkreply
            }
        }
        message.reply(hkreply);
    },
    hikiddoReply: function(message){
        message.reply(hikiddoReplies[Math.floor(Math.random() * hikiddoReplies.length)]);
    },
    havefunReply : function(message){
        message.reply(havefunReplies[Math.floor(Math.random() * havefunReplies.length)]);
    },
    lolReply : function(message, myid){
        if (message.author != myid) {
            message.reply(lmaoReplies[Math.floor(Math.random() * lmaoReplies.length)])
        }
    }
}
