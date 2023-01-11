<template>
  <div class="colors">
    <div class="buttons">
      <button :class="[color]" v-for="color in colors" :key="color" @click="selected = color">
        {{ color }}
      </button>
    </div>
    <!-- Keep alive ile state kaybolmaması sağlanabilir fakat mounted anı kaybedilir. Onun için active ve deactive olarak 2 farklı lifecycle metodu oluşturur. -->
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>

  </div>
</template>

<script>
import Red from './components/Red.vue'
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
export  default {
  components: {
    Red,
    Blue,
    Green
  },
  data(){
    return {
      colors: ['red', 'green', 'blue'],
      selected: 'red'
    }
  }
}
</script>