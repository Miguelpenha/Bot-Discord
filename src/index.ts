import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import axios from 'axios'

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('messageCreate', async msg => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(process.env.PREFIX)) return

    const commandBody = msg.content.slice(process.env.PREFIX.length)
    const args = commandBody.split(':')
    const command = args.shift().toLowerCase()
    
    if (msg.channel.isText()) {
        if (command === 'users') {
            const members = await msg.guild.members.fetch()
            
            let msgMembers = 'Membros do servidor: \n\n'
            let cont = 0
            
            members.map(member => {
                msgMembers += `${member.nickname || member.displayName}${msg.guild.memberCount-1 > cont ? ',\n' : ''}`
                cont ++
            })
            
            msg.reply(msgMembers)
            //msg.reply(`O canal ${channelName} não está autorizado a executar comandos`)
        } else if (command === 'cat') {
            if (args[0] === 'v1') {
                interface Cat {
                    id: string
                    created_at: string
                    tags: string[]
                    url: string
                }
        
                const data: Cat = await (await axios.get('https://cataas.com/cat/cute?json=true')).data
                
                msg.reply(`https://cataas.com/cat/${data.id}`)
            } else if (args[0] === 'v2') {
                interface Cat {
                    breeds: string[]
                    id: string
                    url: string
                    width: number
                    height: number
                }
        
                const data: Cat = (await (await axios.get('https://api.thecatapi.com/v1/images/search')).data)[0]
                
                msg.reply({
                    files: [
                        data.url
                    ]
                })
            }
        } else if (command === 'dog') {
            interface Dog {
                message: string
                status: string
            }
    
            const data: Dog = await (await axios.get('https://dog.ceo/api/breeds/image/random')).data
            
            msg.reply({
                files: [
                    data.message
                ]
            })
        } else if (command === 'valval') {
            if (args[0] === 'agents') {
                interface Agents {
                    uuid: string
                    displayName: string
                }
        
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
            } else if (args[0] === 'armas') {
                interface Armas {
                    uuid: string
                    displayName: string
                }

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
        }
    }

    console.log(command)
})

client.login(process.env.TOKEN)