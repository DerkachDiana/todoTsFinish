import mongoose from 'mongoose'

const Task = new mongoose.Schema({
    checked: {type: Boolean, required: true},
    text: {type: String, required: true}
})

export default mongoose.model('Task', Task)