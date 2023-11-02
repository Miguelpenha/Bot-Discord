import fs from 'fs'
import path from 'path'
import { newPath } from './utils'
import { redBright as error } from 'chalk'

function remove(file: string) {
    fs.rmSync(path.resolve(newPath, file), { recursive: true })

    console.log(error(`    >> ${file}`))
}

export default remove