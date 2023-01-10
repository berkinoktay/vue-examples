<template>
  <div class="todoContainer">
<h3>TODO APP</h3>
    <AddTodo  :addNewTodo="addNewTodo" @add-todo="addNewTodo"/>
      <hr/>
   <TodoList />
    <TodosLength/>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import TodosLength from '@/components/TodosLength.vue'
export default {
  components: {
    AddTodo,
    TodoList,
    TodosLength
  },
  data(){
    return {
      provideData: {
        todos: [
          {id: 1, title: 'Todo 1', completed: false},
          {id: 2, title: 'Todo 2', completed: false},
          {id: 3, title: 'Todo 3', completed: false},
          {id: 4, title: 'Todo 4', completed: false},
          {id: 5, title: 'Todo 5', completed: false},
        ]
      }

    }
  },
  provide(){
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem
    }
  },
  methods: {
    deleteItem(id){

      this.provideData.todos = this.provideData.todos.filter(todo => todo.id !== id)
    },
    addNewTodo(title){
      const id = this.provideData.todos.length + 1;
      const newTodo = {id, title, completed: false};
      this.provideData.todos.push(newTodo);

    }
  }
}
</script>

<style>
  .todoContainer{
    display: flex;
    flex-direction: column;
    min-width: 400px;
    border: 1px solid lightgray;
    border-radius: 8px;
    gap: 2px;
  }
  .todoContainer small {
    align-self: flex-end;
    padding: 4px;
    color: green;
  }
  .todoContainer h3{
    text-align: center;
  }
  .todoContainer input {
    margin: 4px;
    padding: 4px;
    border: 1px solid lightgray;
    border-radius: 4px;
  }
  .todoContainer ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin:4px;
  }
  .todoContainer ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    background-color: #eee;
    border-radius: 4px;
  }
  .todoContainer ul li button {
    cursor: pointer;
    padding: 4px 8px;
    font-weight: 600;
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: red;
    color: white;
  }

  .todoContainer ul li:hover {
    background-color: #ccc;
  }
</style>