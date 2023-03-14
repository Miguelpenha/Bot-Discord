import 'dotenv/config'
import client from './client'
import onReady from './events/onReady'
import onMessageCreate from './events/onMessageCreate'

client.on('ready', onReady)

client.on('messageCreate', onMessageCreate)

client.login(process.env.TOKEN_DISCORD)