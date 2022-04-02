import { Message } from 'discord.js'
import schedulesModels from '../../models/schedule'

async function schedules(msg: Message) {
    const schedules = await schedulesModels.find()
    let messageSchedules = 'Agendas: \n\n'

    schedules.map((schedule, index) => messageSchedules += `${schedule.name}${index === schedules.length-1 ? '' : '\n'}`)

    msg.reply(schedules.length >=1 ? messageSchedules : "Não existem agendas cadastradas \:confused:, digite `!schedules:register:'nome da agenda':'hora da tarefa':'tarefa'` para cadastrar uma agenda")
}

export default schedules