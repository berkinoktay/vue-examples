<template>
  <div class="card d-flex p-2">
    <button type="button" class="btn btn-primary align-self-end" @click="$router.push({name: 'NewUser'})">+ Yeni Kişi Ekle</button>
    <div class="d-flex flex-column">
      <h1 class="text-center">Kişiler</h1>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad Soyad</th>
          <th scope="col">Yaş</th>
          <th scope="col">Doğum Yeri</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.adSoyad}}</td>
          <td>{{user.yas}}</td>
          <td>{{user.dogumYeri}}</td>
          <td>
            <button type="button" class="btn btn-sm btn-danger" @click="deleteItem(user.id)">Sil</button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      users: []
    };
  },
  created() {
    this.$appAxios.get("/users")
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    deleteItem(id){
      this.$appAxios.delete(`/users/${id}`)
        .then(response => {
          if(response.status === 200){
            this.users = this.users.filter(user => user.id !== id);
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>
