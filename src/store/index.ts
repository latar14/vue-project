import { createStore } from 'vuex'
import { Task } from '@/types/types'

export default createStore({
  state: {
    tasks: [] as Task[],
  },
  getters: {
    getTasksAll(state) {
      return state.tasks
    },
  },
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task)

      console.log(state.tasks);
      
    }
  },
  actions: {
    getTaskById({dispatch, commit}, id: number): Task {
const task = this.state.tasks.find((task: Task) => task.id === id)

      return typeof task !== 'undefined' ? task as Task : {} as Task
    }
  },
  modules: {
  }
})
