<template>
<h1>Добавить задачу</h1>
<form>
    <div class="form_element">
        <input v-model="taskName" placeholder="Название задачи"/>        
    </div>
    <div class="form_element">
        <textarea v-model="taskDescription" placeholder="Описание задачи"></textarea>
    </div>
    <div class="form_element">
        <button @click="onsubmit" type="button">
            Добавить задачу
        </button>
    </div>
</form>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapMutations } from "vuex"
import { Task } from '../types/types' 


export default defineComponent ({
    name: 'AddTodoView',
    data: function() {
        return {
            taskName: '',
            taskDescription: '',
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        onsubmit() {
            const id = (new Date().getTime())
            const newTask: Task = {
                id: id,
                name: this.taskName,
                description: this.taskDescription
            }
            this.addTask(newTask)

            this.$router.push(`/task/${id}`)
        }
    }
})
</script>

<style scoped>
.form_element {
    margin: 10px 0;
}
</style>