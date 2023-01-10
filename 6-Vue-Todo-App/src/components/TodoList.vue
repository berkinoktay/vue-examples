<template>
  <ul>
    <TodoItem v-for="todo in provideData.todos" :key="todo.id" :todo="todo"  />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
//props: ["todoList"],
  inject: ["provideData"],
  components: {
    TodoItem
  },

};
</script>
