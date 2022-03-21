import Task from "./Task.js";

class TaskService {
    async create(task) {
        return await Task.create(task)
    }

    async getAll() {
        return Task.find();
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id is not specified')
        }
        return Task.findById(id)
    }

    async update(task) {
        if (!task._id) {
            throw new Error('id is not specified')
        }
        const updatedTask = await Task.findByIdAndUpdate(task._id, task, {new: true})
        return task;

    }

    async delete(id) {
        if (!id) {
            throw new Error('id is not specified')
        }
        return Task.findByIdAndDelete(id);
    }
}

export default new TaskService();