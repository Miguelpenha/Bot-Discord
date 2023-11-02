import fs from 'fs'
import { zipPath, newPath } from './utils'
import archiver from 'archiver'
import remove from './remove'

function createZip() {
    const out = fs.createWriteStream(zipPath)

    const zip = archiver('zip')

    zip.pipe(out)

    zip.directory(newPath, false)

    zip.finalize().then(() => remove(''))
}

export default createZip