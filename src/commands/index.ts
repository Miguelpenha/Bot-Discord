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

type ICommands = keyof typeof commands

const commandsList = Object.keys(commands)

export {
    ICommands,
    commandsList
}

export default commands