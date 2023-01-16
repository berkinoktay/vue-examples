<template>
  <div class="todosBox">
    <AddTodo/>
    <Todos/>
    <ShowTodos/>
  </div>

</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";
import ShowTodos from "@/components/ShowTodos.vue";
export default {
  components: {
    ShowTodos,
    AddTodo,
    Todos
  }
};
</script>
