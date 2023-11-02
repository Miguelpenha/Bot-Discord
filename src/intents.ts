import { ClientOptions, Intents } from 'discord.js'

const intents: ClientOptions['intents'] = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES
]

export default intents