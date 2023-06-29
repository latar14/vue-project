<template>
    <h1>
        {{ task.name }}
    </h1>
    <div>
        {{ task.description }}
    </div>
  </template>
  
  <script lang="ts">
  import { Task } from '@/types/types';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
  
  export default defineComponent({
    name: 'TaskView',
    data: function () {
        return {
            task: {} as Task
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTaskById'])
    },
    async mounted() {
        const task: Task = await this.getTaskById(this.id)

        this.task = task;
    }
  });
  </script>