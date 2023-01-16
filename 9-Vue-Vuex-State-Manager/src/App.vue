<template>
  <div class="container">
    <div class="row">
      <h1>Vue State Manager</h1>
      <TodosBox/>
    </div>

  </div>
</template>


<script>
import axios from "axios";
import TodosBox from "@/components/TodosBox.vue";

export  default  {
  components: {
    TodosBox,
  },
  data() {
    return {
      todoList: []
    }
  },
  mounted(){
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        this.todoList = response.data;
      })
  }
}
</script>