import fs from 'fs'
import path from 'path'
import { oldPath, newPath } from './utils'
import archiver from 'archiver'

function createZip() {
    const out = fs.createWriteStream(path.resolve(oldPath, 'Bot-Discord.zip'))

    const zip = archiver('zip')

    zip.pipe(out)

    zip.directory(newPath, false)

    zip.finalize().then(() => (
        fs.rmSync(newPath, { recursive: true })
    ))
}

export default createZip