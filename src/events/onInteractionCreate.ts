import { Interaction } from 'discord.js'
import commands from '../commands'
import { blueBright as infoMsg, redBright as errorMsg } from 'chalk'

async function onInteractionCreate(interaction: Interaction) {
    if (interaction.isCommand() || interaction.isContextMenu()) {
        const command = commands.find(command => command.name === interaction.commandName)

        if (!command) {
            console.log(errorMsg('>> command not found'))
            console.log(errorMsg(`  >> ${interaction.commandName}`))

            interaction.followUp({ content: 'Houve um erro' })
        } else {
            console.log(infoMsg('>> command'))
            console.log(infoMsg(`   >> ${interaction.commandName}`))

            await interaction.deferReply()

            command.run(interaction)
        }
    }
}

export default onInteractionCreate