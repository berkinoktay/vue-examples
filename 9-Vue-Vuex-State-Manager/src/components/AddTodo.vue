<template>
  <div class="addTodo">
    <input type="text" v-model="title" placeholder="Add Todo..."/>
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      //? Commit: Mutasyonları çağırır.
     /* this.$store.commit("addTodo",{
        id: this.$store.state.todoList.length + 1,
        title: this.title,
        completed: false
      } );
      this.title = "";
      */

      //? Dispatch: Actionları çağırır.
      this.$store.dispatch("addTodoAction",{
        id: this.$store.state.todoList.length + 1,
        title: this.title,
        completed: false
      } );
      this.title = "";

      /*
      this.$store.state.todoList.push({
        id: this.$store.state.todoList.length + 1,
        title: this.title,
        completed: false
      });
      */

    }
  }
};
</script>
