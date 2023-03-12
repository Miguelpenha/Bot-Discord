import fs from 'fs'
import path from 'path'
import { oldPath, newPath } from './utils'

function move(file: string) {
    fs.copyFileSync(path.resolve(oldPath, file), path.resolve(newPath, file))
}

export default move