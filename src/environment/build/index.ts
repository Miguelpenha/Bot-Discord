import fs from 'fs'
import { newPath } from './utils'
import { redBright as error, bold } from 'chalk'
import path from 'path'
import buildFolder from './buildFolder'

const isExists = fs.existsSync(newPath)

if (isExists) {
    console.log(error(`>> Pasta ${bold('Bot-Discord')} antiga excluída`))

    fs.rmSync(path.resolve(newPath), { recursive: true })
}

buildFolder()