import 'dotenv/config'
import mongoose from 'mongoose'
import { Client, Intents } from 'discord.js'
import axios from 'axios'
import membersModels from './models/member'
import fs from 'fs'
import path from 'path'

mongoose.connect(process.env.URL_MONGO)

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', async () => console.log('Bot rodando'))

client.on('messageCreate', async msg => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(process.env.PREFIX)) return
    
    const commandBody = msg.content.slice(process.env.PREFIX.length)
    const args = commandBody.split(':')
    const command = args.shift().toLowerCase()
    if (msg.channel.isText()) {
        console.log(msg.content)
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

            try {
                const data: Dog = await (await axios.get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : 'https://dog.ceo/api/breeds/image/random')).data
            
                msg.reply({
                    files: [
                        data.message
                    ]
                })
            } catch {
                msg.reply(args[0] ? 'Essa raça não está disponível \:confused:' : 'Houve um erro ao pegar a foto \:confused:')
            }
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
        } else if (command === 'members') {
            if (args[0]) {
                if (args[0] === 'register' && args[1]) {
                    const memberExists = await membersModels.findOne({nickName: msg.author.username})

                    if (memberExists) {
                        msg.reply('Esse usúario já está cadastrado \:confused:')
                    } else {
                        await membersModels.create({
                            name: args[1],
                            nickName: msg.author.username
                        })
    
                        msg.reply('Usúario cadastrado com sucesso \:smile:')
                    }
                } else if (args[0] === 'delete' && args[1]) {
                    if (process.env.ID_ADMIN === msg.author.id) {
                        await membersModels.deleteOne({name: args[1]})

                        msg.reply('Usúario deletado com sucesso \:smile:')
                    } else {
                        msg.reply('Você não tem permisão para excluir um usuário \:confused:')
                    }
                } else if (args[0] === 'delete') {
                    if (process.env.ID_ADMIN === msg.author.id) {
                        await membersModels.deleteMany()!
                        
                        msg.reply('Usúarios deletados com sucesso \:smile:')
                    } else {
                        msg.reply('Você não tem permisão para excluir um usuário \:confused:')
                    }
                } else {
                    msg.reply('Esse comando não existe, digite `!help` para ajuda')
                }
            } else {
                const members = await membersModels.find()
                let messageMembers = 'Participantes: \n\n'

                members.map((member, index) => messageMembers += `${member.name}${index === members.length-1 ? '' : '\n'}`)

                msg.reply(members.length >=1 ? messageMembers : "Não existem usúarios cadastrados \:confused:, digite `!members:register:'seu nome'` para se cadastrar")
            }
        } else if (command === 'roles') {
            const roles = (await msg.guild.roles.fetch()).map(role => role)
            let msgRoles = 'Cargos: \n\n'

            roles.map((role, index) => msgRoles += `${role.name.includes('@') ? role.name : `<@&${role.id}>`}${index === roles.length-1 ? '' : '\n'}`)

            msg.reply(msgRoles)
        } else if (command === 'help') {
            if (fs.existsSync(path.resolve(__dirname, '../', 'README.md'))) {
                msg.reply(fs.readFileSync(path.resolve(__dirname, '../', 'README.md')).toString('utf-8'))
            } else {
                msg.reply(fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8'))
            }
        } else {
            msg.reply('Esse comando não existe, digite `!help` para ajuda')
        }
    }

    console.log(command)
})

client.login(process.env.TOKEN)