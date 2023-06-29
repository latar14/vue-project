<template>
  <div class="home">
    <div v-for="task in tasks" :key="task.id">
    <h4>
      <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
    </h4>
  </div>
  <div v-if="tasks.length === 0">
    Задачи не найдены
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { Task } from '@/types/types';

export default defineComponent({
  name: 'HomeView',
  data: function() {
    return {
      tasks: [] as Task[],
  }
  },
  components: {

},
  methods: {
    ...mapGetters(['getTasksAll']),
  },
  mounted() {
    this.tasks = this.getTasksAll()
  }
});
</script>
