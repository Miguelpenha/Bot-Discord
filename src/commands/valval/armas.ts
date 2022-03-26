import { Message } from 'discord.js'
import axios from 'axios'

interface Armas {
    uuid: string
    displayName: string
}

async function armas(msg: Message) {
    const armas: Armas[] = await (await axios.get('https://valorant-api.com/v1/weapons', {
        params: {
            'language': 'pt-BR'
        }
    })).data.data
    
    let msgArmas = 'Armas do valorant: \n\n'
    let cont = 0
    
    armas.map(arma => {
        msgArmas += `${arma.displayName}${armas.length-1 > cont ? ',\n' : ''}`
        cont ++
    })
    
    msg.reply(msgArmas)
}

export default armas