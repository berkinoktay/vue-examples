<template>
  <ul class="todos">
    <li v-for="todo in todoList" :key="todo.id">
   {{todo.title}}
    </li>
  </ul>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  methods: {
    ...mapActions(['fetchTodosAction'])
  },
  mounted(){
    this.fetchTodosAction();
  },
  computed: {
    ...mapGetters({
      todoList: '_getTodos'
    })
  }
};
</script>
