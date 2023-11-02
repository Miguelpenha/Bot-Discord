import fs from 'fs'
import { newPath } from './utils'
import remove from './remove'
import buildFolder from './buildFolder'

const isExists = fs.existsSync(newPath)

isExists && remove('')

buildFolder()