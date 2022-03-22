import mongoose from 'mongoose'

interface Imember {
    name: string
    nickName: string
    admin?: boolean
}

const schema = new mongoose.Schema<Imember>({
    name: String,
    nickName: String,
    admin: Boolean
})

const membersModels = mongoose.model<Imember>('members', schema)

export default membersModels