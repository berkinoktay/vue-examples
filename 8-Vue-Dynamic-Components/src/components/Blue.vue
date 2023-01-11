<template>
  <div class="blue">
    Blue
  </div>
  <input type="text" placeholder="Bir şeyler yaz..">
</template>
<script>
export default {

  // mounted(){
  //   console.log('mounted');
  // },
  activated(){
    console.log('activated');
  },
  deactivated(){
    console.log('deactivated');
  }
}
</script>