<template>
  <small>
    {{provideData.todos.length}} adet todo vardır
  </small>
</template>
<script>
export  default {
  props: ["itemCount"],
  inject: ["provideData"],
}
</script>