import fs from 'fs'
import { newPath } from './utils'
import buildFolder from './buildFolder'

const isExists = fs.existsSync(newPath)

isExists && fs.rmSync(newPath, { recursive: true })

buildFolder()