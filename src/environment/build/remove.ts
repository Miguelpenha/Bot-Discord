import fs from 'fs'
import path from 'path'
import { newPath } from './utils'

function remove(file: string) {
    fs.rmSync(path.resolve(newPath, file), { recursive: true })
}

export default remove