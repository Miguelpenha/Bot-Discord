import { greenBright as success, bold, blueBright as info, redBright as error } from 'chalk'
import fs from 'fs'
import path from 'path'
import { oldPath, newPath, zipPath } from './utils'
import move from './move'
import remove from './remove'
import createZip from './createZip'

function build() {
    console.log(success(`>> Começando a construção da pasta ${bold('Bot-Discord')}`))

    fs.renameSync(path.resolve(oldPath, 'dist'), newPath)

    console.log(info(`>> Pasta ${bold('dist')} renomeada para ${bold('Bot-Discord')}`))

    console.log(info(`>> Arquivos/pastas copiados para ${bold('Bot-Discord')}`))

    move('.env')
    move('README.md')
    move('package.json')
    move('discloud.config')

    console.log(error(`>> Arquivos/pastas removidos de ${bold('Bot-Discord')}`))

    remove('environment')

    const isExists = fs.existsSync(zipPath)

    isExists && fs.rmSync(zipPath, { recursive: true })

    console.log(error(`>> Arquivo ${bold('Bot-Discord.zip')} antigo excluído`))

    createZip()
}

export default build