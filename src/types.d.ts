import { ChatInputApplicationCommandData, Client, BaseCommandInteraction } from 'discord.js'

interface ICommand extends ChatInputApplicationCommandData {
    run: (interaction: BaseCommandInteraction) => void
}

export {
    ICommand
}