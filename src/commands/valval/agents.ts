import { Message } from 'discord.js'
import axios from 'axios'

interface Agents {
    uuid: string
    displayName: string
}

async function agents(msg: Message) {
    const agents: Agents[] = await (await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
        params: {
            'language': 'pt-BR'
        }
    })).data.data
    
    let msgAgents = 'Agentes do valorant: \n\n'
    let cont = 0
    
    agents.map(member => {
        msgAgents += `${member.displayName}${agents.length-1 > cont ? ',\n' : ''}`
        cont ++
    })
    
    msg.reply(msgAgents)
}

export default agents