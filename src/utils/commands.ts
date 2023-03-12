import cat from '../commands/cat'
import dog from '../commands/dog'
import help from '../commands/help'
import image from '../commands/image'
import roles from '../commands/roles'
import members from '../commands/members'

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