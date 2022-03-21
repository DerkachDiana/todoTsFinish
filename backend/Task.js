import mongoose from 'mongoose'

const Task = new mongoose.Schema({
    isChecked: {type: Boolean, required: true},
    text: {type: String, required: true}
})

export default mongoose.model('Task', Task)