import { ClientOptions, Intents, Client } from 'discord.js'

const intents: ClientOptions['intents'] = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES
]

const client = new Client({ intents })

export default client