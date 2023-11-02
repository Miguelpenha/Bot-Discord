import fs from 'fs'
import path from 'path'
import { oldPath, newPath } from './utils'
import { blueBright as info } from 'chalk'

function move(file: string) {
    fs.copyFileSync(path.resolve(oldPath, file), path.resolve(newPath, file))

    console.log(info(`    >> ${file}`))
}

export default move