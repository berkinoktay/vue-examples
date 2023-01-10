<template>
  <Header />
  <div>
    <h3>Bu benim ilk Vue CLI uygulamam.</h3>
    <p>Bu bir paragraftır.</p>
  </div>
  <CounterItem/>
  <CounterItem/>

</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export  default {
  components: {CounterItem},
component: {
  CounterItem
}
}
</script>