<template>
    <input type="text" placeholder="Add new todo" @keyup.enter="addNewTodo($event.target.value)">
</template>

<script>
export default {
  props:{
    addNewTodo: {
      type: Function,
      required: true
    }
  },
  /* methods:{
    addNewTodo(e){
      this.$emit('add-todo', e.target.value)
      e.target.value = '';
    }
  }*/
}
</script>
