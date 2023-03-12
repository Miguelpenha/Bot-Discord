import fs from 'fs'
import path from 'path'
import { oldPath, newPath } from './utils'
import move from './move'
import createZip from './createZip'

function build() {
    fs.renameSync(path.resolve(oldPath, 'dist'), newPath)

    move('package.json')
    move('.env')
    move('discloud.config')
    move('README.md')

    const isExists = fs.existsSync(path.resolve(oldPath, 'Bot-Discord.zip'))

    isExists && fs.rmSync(path.resolve(oldPath, 'Bot-Discord.zip'), { recursive: true })

    createZip()
}

export default build