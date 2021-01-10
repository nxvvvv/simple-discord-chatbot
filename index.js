// Load Configs
const config = require('dotenv')

// Load Discord Client
const Discord = require('discord.js')
const client = new Discord.Client()

// Load Quick.Chat Client
const chatcord = require('chatcord')
const chat = new chatcord.Client()

// Console it if the Client is ready!
client.on('ready', () => console.log('Bot is ready :D'))

// In case if the Discord Client gets the message
client.on('message', (msg) => {
  if(message.author.bot || message.channel.type == 'dm') return
  if(message.channel.id != config.channelID) return
  message.channel.startTyping()
  chat.chat(message.content).then(reply => {
    message.channel.stopTyping()
    message.channel.send(reply)
  })
})

// Insert ur secret token here
client.login(config.token)
