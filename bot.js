// to do list: 2. importing from other files 3. welcome message 4. help command 5. other functions

let commands = require('./js/commands.js')

require('dotenv').config()

// Require the necessary discord.js classes
const {
    Client,
    Intents
} = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: ["GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

const prefix = 'tys';

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);

var http = require('http');

http.createServer(function (req, res) {
    res.write("I'm alive");
    res.end();
}).listen(8080);


myId = process.env.BOT_ID

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!!!!');
    setInterval(() => client.user.setActivity("tys | My dad's favourite song", {
        type: "PLAYING"
    }), 5000)
});

shutReplies = ["ok", "no", "no you", "umm", ".", "_ _", "*😏*"]
hikiddoReplies = ["Hi old man.", "Hey!!!", "hi, kim jong-un", "go away i hate you", "hi, joe biden"]
heykidReplies = ["go away", 'hi, "adult"', "Don't call me a kid :(((", "Hello I want another babysitter ouainnnnnnnn..."]
havefunReplies = ["I want another babysitter ouainnnnnnnn...", "I dont like you go away", "YEETTTT"]
stfuReplies = ["no you.", "ok", "nah im never going to stfu its literally impossible", "no pls", "nah sry"]
meanReplies = ["yes!", "meaaan!", "👎", "👍", "nah", "agreed", "disagreed."]
lmaoReplies = ["yessir", "👍", "LMFAOO", "yes, lol!", "LOLLL", "_ _", "...", "🤔", "**LMAO**", "bro", "LOL", "LMFAO"]

client.on("messageCreate", (message) => {
    var botMem =  message.guild.me

    // auto message replies

    if (message.channel.permissionsFor(message.client.user).has('SEND_MESSAGES')) {
        //console.log('yes')
        var LowercasedMsg = message.content.toLowerCase()
        switch (true) {
            case message.content == "who is your mom":
                message.reply("Suuuuuuuri!!! <3");
                break;
            case message.content == "who is your dad":
                message.reply("Tommmmmyyyyyyy!!! <3");
                break;
            case message.content.toLowerCase() == "shut up" && !message.author.bot:
                message.reply(shutReplies[Math.floor(Math.random() * shutReplies.length)]);
                break;
            case message.content.toLowerCase() == "stfu" && !message.author.bot:
                message.reply(stfuReplies[Math.floor(Math.random() * stfuReplies.length)]);
                break;
            case message.content.toLowerCase().indexOf("so mean") > -1 && !message.author.bot:
                message.reply(meanReplies[Math.floor(Math.random() * meanReplies.length)]);
                break;
            case message.content.indexOf("😂") > -1 && !message.author.bot:
                message.reply("😂😂😂");
                break;
            case message.content == "hi babe":
                message.reply("hello there~~~")
                break;
            case message.content == "hey kid" || message.content == "hi kid":
                var hkreply = heykidReplies[Math.floor(Math.random() * heykidReplies.length)]
                if (hkreply == heykidReplies[3]) {
                    if (message.author != process.env.BABYSIT) {
                        var hkreply = heykidReplies[Math.floor(Math.random() * heykidReplies.length) - 1]
                    } else {
                        var hkreply = hkreply
                    }
                }
                message.reply(hkreply);
                break;
            case message.content == "hi kiddo" || message.content == "hey kiddo":
                message.reply(hikiddoReplies[Math.floor(Math.random() * hikiddoReplies.length)]);
                break;
            case message.content == "hey kid lets have some fun" && message.author == process.env.BABYSIT:
                message.reply(havefunReplies[Math.floor(Math.random() * havefunReplies.length)]);
                break;
            case LowercasedMsg == "lmao" || LowercasedMsg == "lol" || LowercasedMsg == "lmfao":
                if (message.author != myId) {
                    message.reply(lmaoReplies[Math.floor(Math.random() * lmaoReplies.length)])
                }
                break;

            // commands here . . .

            case (message.content.toLowerCase().startsWith(prefix) && !message.author.bot):
                var arg = message.content.slice(prefix.length + 1).toLowerCase()
                switch (true) {
                    case arg.startsWith("resurrect"):
                        commands.resurrect({arg: arg, message: message})
                        
                    case arg.startsWith("kill"):
                        commands.kill({arg: arg, message: message})

                    case arg.startsWith("setchannel"):
                        var setchannel = arg.slice("setchannel".length + 1, message.content.indexOf(">") - 3);
                        console.log(setchannel);
                        break;
                }
        }
    } else {
        return;
    }
})

const tmyYYYWelcomeChannelId = "882038730918080563"
/*client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(member.channelId).send(`${member} Omg hiii!`)
})*/
