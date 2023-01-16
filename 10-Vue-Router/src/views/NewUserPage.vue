<template>
  <div class="card p-2">
    <h1 class="text-center">Kişi Ekle</h1>
  <div class="mb-3">
    <label for="adSoyad" class="form-label">Ad Soyad</label>
    <input type="text" v-model="userData.adSoyad" class="form-control" id="adSoyad" placeholder="Örn:Berkin Oktay">
  </div>
    <div class="mb-3">
      <label for="yas" class="form-label">Yaş</label>
      <input type="text" v-model="userData.yas" class="form-control" id="yas" placeholder="Örn:22">
    </div>
    <div class="mb-3">
      <label for="dogumYeri" class="form-label">Doğum Yeri</label>
      <input type="text" v-model="userData.dogumYeri" class="form-control" id="dogumYeri" placeholder="Örn:Edirne">
    </div>
    <div class="d-flex align-items-center justify-content-end">
<button type="button" class="btn btn-secondary me-2" @click="$router.push({name: 'Home'})">İptal</button>
      <button type="button" class="btn btn-primary" @click="onSave">Kaydet</button>
    </div>

</div>
</template>

<script>
export default {
  name: "NewUserPage",
  data() {
    return {
      userData: {
        adSoyad: null,
        yas: null,
        dogumYeri: null,
      }
    };
  },
  methods: {
    onSave(){
      this.$appAxios.post("/users", this.userData)
        .then(response => {
          console.log(response);
          this.$router.push({name: 'Home'});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>
