// to do list: 2. importing from other files 3. welcome message 4. help command 5. other functions

let commands = require('./js/commands.js')
let replies = require('./js/replies.js')

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


let myId = process.env.BOT_ID

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!!!!');
    setInterval(() => client.user.setActivity("tys | My dad's favourite song", {
        type: "PLAYING"
    }), 5000)
});

let shutReplies = ["ok", "no", "no you", "umm", ".", "_ _", "*😏*"]
let hikiddoReplies = ["Hi old man.", "Hey!!!", "hi, kim jong-un", "go away i hate you", "hi, joe biden"]
let heykidReplies = ["go away", 'hi, "adult"', "Don't call me a kid :(((", "Hello I want another babysitter ouainnnnnnnn..."]
let havefunReplies = ["I want another babysitter ouainnnnnnnn...", "I dont like you go away", "YEETTTT"]
let stfuReplies = ["no you.", "ok", "nah im never going to stfu its literally impossible", "no pls", "nah sry"]
let meanReplies = ["yes!", "meaaan!", "👎", "👍", "nah", "agreed", "disagreed."]
let lmaoReplies = ["yessir", "👍", "LMFAOO", "yes, lol!", "LOLLL", "_ _", "...", "🤔", "**LMAO**", "bro", "LOL", "LMFAO"]

client.on("messageCreate", (message) => {
    var botMem =  message.guild.me

    // auto message replies

    if (message.channel.permissionsFor(message.client.user).has('SEND_MESSAGES')) {
        //console.log('yes')
        var LowercasedMsg = message.content.toLowerCase()
        switch (true) {
            case message.content == "who is your mom":
                replies.whosmomReply(message);
                break;
            case message.content == "who is your dad":
                replies.whosdadReply(message);
                break;
            case message.content.toLowerCase() == "shut up" && !message.author.bot:
                replies.shutupReply(message);
                break;
            case message.content.toLowerCase() == "stfu" && !message.author.bot:
                replies.stfuReply(message);
                break;
            case message.content.toLowerCase().indexOf("so mean") > -1 && !message.author.bot:
                replies.meanReply(message);
                break;
            case message.content.indexOf("😂") > -1 && !message.author.bot:
                replies.joyReply(message);
                break;
            case message.content == "hi babe":
                replies.babeReply(message);
                break;
            case message.content == "hey kid" || message.content == "hi kid":
                replies.hikidReply(message);
                break;
            case message.content == "hi kiddo" || message.content == "hey kiddo":
                replies.hikiddoReply(message);
                break;
            case message.content == "hey kid lets have some fun" && message.author == process.env.BABYSIT:
                replies.havefunReply(message);
                break;
            case LowercasedMsg == "lmao" || LowercasedMsg == "lol" || LowercasedMsg == "lmfao":
                replies.lolReply(message, myId);
                break;

            // commands here . . .

            case (message.content.toLowerCase().startsWith(prefix) && !message.author.bot):
                var arg = message.content.slice(prefix.length + 1).toLowerCase()
                switch (true) {
                    case arg.startsWith("resurrect"):
                        commands.resurrect({arg: arg, message: message});
                        break;
                        
                    case arg.startsWith("kill"):
                        commands.kill({arg: arg, message: message});
                        break;

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
