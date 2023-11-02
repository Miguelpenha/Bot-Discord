import { Client } from 'discord.js'
import intents from './intents'

const client = new Client({ intents })

export default client