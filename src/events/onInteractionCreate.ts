import { Interaction } from 'discord.js'
import commands from '../commands'

async function onInteractionCreate(interaction: Interaction) {
    if (interaction.isCommand() || interaction.isContextMenu()) {
        const command = commands.find(c => c.name === interaction.commandName)

        if (!command) {
            interaction.followUp({ content: 'Houve um erro' })

            return
        }

        await interaction.deferReply()

        command.run(interaction)
    }
}

export default onInteractionCreate