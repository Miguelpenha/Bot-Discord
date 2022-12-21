import fs from 'fs'
import path from 'path'
import build from './build'

if (fs.existsSync(path.resolve(__dirname, '..', 'Bot-Discord'))) {
    fs.rm(path.resolve(__dirname, '..', 'Bot-Discord'), {
        recursive: true
    }, () => {
        build()
    })
} else {
    build()
}

