import fs from 'fs'
import path from 'path'
import { oldPath, newPath, zipPath } from './utils'
import move from './move'
import remove from './remove'
import createZip from './createZip'

function build() {
    fs.renameSync(path.resolve(oldPath, 'dist'), newPath)

    move('package.json')
    move('.env')
    move('discloud.config')
    move('README.md')

    remove('environment')
    remove('discloud.config')

    const isExists = fs.existsSync(zipPath)

    isExists && fs.rmSync(zipPath, { recursive: true })

    createZip()
}

export default build