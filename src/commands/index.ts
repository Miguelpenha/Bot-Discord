import cat from './cat'
import dog from './dog'
import help from './help'
import image from './image'
import roles from './roles'
import members from './members'

const commands = {
    cat,
    dog,
    help,
    image,
    roles,
    members
}

export type ICommands = keyof typeof commands

export const commandsList = Object.keys(commands)

export default commands