import path from 'path'

const oldPath = path.resolve(__dirname, '..', '..', '..')
const zipPath = path.resolve(oldPath, 'Bot-Discord.zip')
const newPath = path.resolve(oldPath, 'Bot-Discord')

export {
    oldPath,
    zipPath,
    newPath
}