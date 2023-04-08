import { ChatInputApplicationCommandData, BaseCommandInteraction } from 'discord.js'

interface ICommand extends ChatInputApplicationCommandData {
    run: (interaction: BaseCommandInteraction) => void
}

export default ICommand