import fs from 'fs'
import path from 'path'
import archiver from 'archiver'

function createZip() {
    const out = fs.createWriteStream(path.resolve(__dirname, '..', '..', 'Bot-Discord.zip'))

    const zip = archiver('zip')

    zip.pipe(out)

    zip.directory(path.resolve(__dirname, '..', '..', 'Bot-Discord'), false)

    zip.finalize().then(() => {
        fs.rm(path.resolve(__dirname, '..', '..', 'Bot-Discord'), {
            recursive: true
        }, () => {

        })
    })
}

export default createZip