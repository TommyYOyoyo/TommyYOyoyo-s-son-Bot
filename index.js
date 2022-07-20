// Replit = running code, Uptimerobot = making replit alive

// to do list: 2. SQL DATABASE + cooldown + user&server datas 3. welcome message 4. help command 5. other functions

var commands = require('./js/commands.js')
var replies = require('./js/replies.js')

require('dotenv').config()

// Require the necessary discord.js classes
const {
    Client,
    Intents,
    MessageEmbed
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


var myId = process.env.BOT_ID

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!!!!');
    setInterval(() => client.user.setActivity("tys | My dad's favourite song", {
        type: "PLAYING"
    }), 5000)
});

client.on("messageCreate", (message) => {
    let botMem =  message.guild.me

    // auto message replies

    if (message.channel.permissionsFor(message.client.user).has('SEND_MESSAGES')) {
        let LowercasedMsg = message.content.toLowerCase()
        switch (true) {
            /*
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
*/
            // commands here . . .
            
            case (message.content.toLowerCase().startsWith(prefix) && !message.author.bot):
                let originalArg = message.content.slice(prefix.length + 1)
                let arg = message.content.slice(prefix.length + 1).toLowerCase()
                switch (true) {
                    case arg.startsWith("resurrect"):
                        commands.resurrect({arg: arg, message: message});
                        break;
                        
                    case arg.startsWith("kill"):
                        commands.kill({arg: arg, message: message});
                        break;

                    case arg.startsWith("setchannel"):
                        let setchannel = arg.slice("setchannel".length + 1, message.content.indexOf(">") - 3);
                        console.log(setchannel);
                        break;
                        
                    case arg.startsWith("nuke"):
                        if (message.channel.permissionsFor(message.client.user).has('EMBED_LINKS')){
                            commands.nuke({arg: arg, message: message, originalArg: originalArg});
                        } else {      
                    }
                }
        }
    } else {
        return;
    }
})

client.on("messageCreate", (message) => {
    if(message.channelId == process.env.DANK_TRENDING_AC && !message.author.bot){
      message.reply("<@&958883453707907173>")
    }
})
