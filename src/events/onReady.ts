import { Client } from 'discord.js'
import { blueBright as infoMsg } from 'chalk'
import commands from '../commands'

async function onReady(client: Client) {
    if (!client.user || !client.application) return null

    await client.application.commands.set(commands)

    console.log(infoMsg('>> Bot is running'))
}

export default onReady