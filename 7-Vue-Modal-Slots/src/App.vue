<template>
  <Modal>
    <template v-slot:header>
      Bu başlık slottan gelmektedir.
    </template>
   <!-- <template #header>
      Burası başlıktır.
    </template> -->
    <template v-slot:content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis blandit leo ac porttitor. Phasellus suscipit gravida ante in tempus. Nullam et nibh ut tortor condimentum tempus. Integer eget libero eget velit luctus mattis et id augue. Cras tincidunt fermentum nisl quis scelerisque. Mauris fringilla eu lectus vel volutpat. Integer eu ante nec felis commodo egestas. Cras egestas lacus non lacinia mattis.
    </template>
    <template v-slot:footer>
      <button>Kapat</button>
      <button>Kaydet</button>
    </template>
  </Modal>
</template>
<script>
import Modal from './components/Modal.vue'
export default {
  components: {
    Modal
  },

}
</script>