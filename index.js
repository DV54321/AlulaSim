const Eris = require('eris')
const { Token, Prefix, clientID, Alula } = require('./config.json')
const bot = new Eris(Token)
bot.on('ready', () => {
  console.log('Ready!')
})
bot.on('messageCreate', async (m) => {
  if (!m.content.startsWith(Prefix)) return null
  if (m.content === `${Prefix}hello`) {
    bot.createMessage(m.channel.id, 'Hello there!')
  }
  const alulaFilter = await m.channel.getMessages()
  const filtered = alulaFilter.filter(x => x.author.id === Alula)
  const h = filtered[Math.floor(Math.random() * filtered.length)]
  const hugAlula = h.content
  if (m.content === `${Prefix}alulasays`) {
    bot.createMessage(m.channel.id, `${hugAlula}`)
  };
  if (m.content === `${Prefix}help`) {
    bot.createMessage(m.channel.id,
      'Help Command:\n\`\`\`\nGeneral:\n\n Hello:\n Say hello to me!\nAlulasays:\n I will grab a random message that Alula has said on this server!\n\nMisc:\n\n Invite: get my invite!\nHelp: my help command!`\`\`\`')
    if (m.content === `${Prefix}invite`) {
      bot.createMessage(m.channel.id, `You can find my invite link here! https://discord.com/oauth2/authorize?client_id=${clientID}&permissions=3072&scope=bot`)
    }
  }
})
bot.connect()
