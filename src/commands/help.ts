import { ICommand } from '../types'
import path from 'path'
import fs from 'fs'

const help: ICommand = {
    name: 'help',
    type: 'CHAT_INPUT',
    description: 'Ajuda',
    run: interaction => {
        const basePath = path.resolve(__dirname, '..')
        let pathREADME = ''

        if (fs.existsSync(path.resolve(basePath, '..', 'README.md'))) {
            pathREADME = path.resolve(basePath, '..', 'README.md')
        } else {
            pathREADME = path.resolve(basePath, 'README.md')
        }

        interaction.followUp({
            ephemeral: true,
            content: fs.readFileSync(pathREADME).toString('utf-8')
        })
    }
}

export default help