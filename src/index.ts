import 'dotenv/config'
import client from './client'
import onReady from './events/onReady'
import onInteractionCreate from './events/onInteractionCreate'

client.on('ready', onReady)
client.on('interactionCreate', onInteractionCreate)

client.login(process.env.TOKEN_DISCORD)