<template>
<div class="showButtons">
  <button @click="showAll">Show All</button>
  <button @click="showCompleted">Show Completed</button>
  <button @click="showUncompleted">Show Uncompleted</button>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "ShowTodos",
  methods:{
    showAll(){
      this.$store.commit("setFilter", "all");
    },
    showCompleted(){
      this.$store.commit("setFilter", "completed");
    },
    showUncompleted(){
      this.$store.commit("setFilter", "uncompleted");
    }
  },


};
</script>

