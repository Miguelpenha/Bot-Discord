import { greenBright as success, bold } from 'chalk'
import fs from 'fs'
import { zipPath, newPath } from './utils'
import archiver from 'archiver'

function createZip() {
    console.log(success(`>> Começando a construção de ${bold('Bot-Discord.zip')}`))

    const out = fs.createWriteStream(zipPath)
    const zip = archiver('zip')

    zip.pipe(out)

    zip.directory(newPath, false)

    zip.finalize().then(() => (
        fs.rmSync(newPath, { recursive: true })
    ))

    console.log(success(`>> ${bold('Bot-Discord.zip')} criado`))
}

export default createZip