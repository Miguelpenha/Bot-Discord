import mongoose from 'mongoose'
import { Ihorary } from '../types'

interface Ischedules {
    name: string
    author: String
    horarys: Ihorary[]
}

const schema = new mongoose.Schema<Ischedules>({
    name: String,
    author: String,
    horarys: [{
        hour: String,
        task: String
    }]
})

const schedulesModels = mongoose.model<Ischedules>('schedules', schema)

export default schedulesModels