<template>
  <div class="counterBox">
    <h3>{{counter}}</h3>
    <div class="actions">
      <button @click="counter--">-</button>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script>
export  default {
  data(){
    return{
      counter:0
    }
  }
}
</script>