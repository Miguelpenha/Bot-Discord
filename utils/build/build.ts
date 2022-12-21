import fs from 'fs'
import path from 'path'
import createZip from './createZip'

function build() {
    fs.renameSync(path.resolve(__dirname, '..', '..', 'dist'), path.resolve(__dirname, '..', '..', 'Bot-Discord'))

    fs.copyFileSync(path.resolve(__dirname, '..', '..', 'package.json'), path.resolve(__dirname, '..', '..', 'Bot-Discord', 'package.json'))

    fs.copyFileSync(path.resolve(__dirname, '..', '..', '.env'), path.resolve(__dirname, '..', '..', 'Bot-Discord', '.env'))

    fs.copyFileSync(path.resolve(__dirname, '..', '..', 'README.md'), path.resolve(__dirname, '..', '..', 'Bot-Discord', 'README.md'))

    if (fs.existsSync(path.resolve(__dirname, '..', '..', 'Bot-Discord.zip'))) {
        fs.rm(path.resolve(__dirname, '..', '..', 'Bot-Discord.zip'), {
            recursive: true
        }, () => {
            createZip()
        })
    } else {
        createZip()
    }
}

export default build