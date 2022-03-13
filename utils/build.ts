import fs from 'fs'
import path from 'path'
import archiver from 'archiver'

if (fs.existsSync(path.resolve(__dirname, '..', 'Bot-Discord'))) {
    fs.rm(path.resolve(__dirname, '..', 'Bot-Discord'), {
        recursive: true
    }, () => {
        build()
    })
} else {
    build()
}

function build() {
    fs.renameSync(path.resolve(__dirname, '..', 'dist'), path.resolve(__dirname, '..', 'Bot-Discord'))

    fs.copyFileSync(path.resolve(__dirname, '..', 'package.json'), path.resolve(__dirname, '..', 'Bot-Discord', 'package.json'))
    
    fs.copyFileSync(path.resolve(__dirname, '..', '.env'), path.resolve(__dirname, '..', 'Bot-Discord', '.env'))

    if (fs.existsSync(path.resolve(__dirname, '..', 'Bot-Discord.zip'))) {
        fs.rm(path.resolve(__dirname, '..', 'Bot-Discord.zip'), {
            recursive: true
        }, () => {
            createZip()
        })
    } else {
        createZip()
    }
}

function createZip() {
    const out = fs.createWriteStream(path.resolve(__dirname, '..', 'Bot-Discord.zip'))

    const zip = archiver('zip')
    
    zip.pipe(out)

    zip.directory(path.resolve(__dirname, '..', 'Bot-Discord'), false)

    zip.finalize().then(() => {
        fs.rm(path.resolve(__dirname, '..', 'Bot-Discord'), {
            recursive: true
        }, () => {
            
        })
    })
}