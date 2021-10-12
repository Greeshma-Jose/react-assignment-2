import axios from 'axios';

export default class TaskApi {
    static saveUser(user) {
        return axios.post("http://localhost:3001/users", user);
    }
    static saveTask(task) {
        return axios.post("http://localhost:3001/tasks", task);
    }
}