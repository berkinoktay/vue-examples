<template>
  <li>
        <span>
         {{todo.title}}
        </span>
    <button @click="deleteItem(todo.id)">
      Sil
    </button>
  </li>
</template>

<script>
export default {
  props: ["todo"],
  inject: ["deleteItem"],
};
</script>
