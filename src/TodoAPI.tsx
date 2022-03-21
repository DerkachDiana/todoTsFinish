import { Task } from './types/Task';

class TodoAPI {
  async getAllTasks(): Promise <Task[] | undefined> {
    try {
      const response = await fetch('http://localhost:5003/api/tasks/');
      return response.json()
    } catch(error) {
      console.log("getAll task" + error)
    }
  }

  async createTask(task: Task): Promise <string | void> {
    try {
      const response = await fetch('http://localhost:5003/api/tasks', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "text" : task.text,
          "isChecked": task.isChecked
        })
      })
      return response.json()

    } catch(error) {
      console.log("Create task" + error)
    }
  }
  async deleteTask (taskId: string): Promise<void> {
    try {
      await fetch(`http://localhost:5003/api/tasks/`+ taskId, {
        method: 'DELETE'
      })
    } catch(error) {
      console.log('Delete task error ', error)
    }
  }
  async updateTasks(task: Task): Promise <string | void> {
    try {
      const response = await fetch(`http://localhost:5003/api/tasks/`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "_id": task._id,
          "text": task.text,
          "isChecked": task.isChecked
        })
      });
      return response.json();
    } catch(error) {
      console.log("updateTasks error" + error)
    }
  }
}
export default new TodoAPI();