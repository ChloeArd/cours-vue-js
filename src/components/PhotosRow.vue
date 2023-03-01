<template>
 <div v-if="this.responseData" class="row d-inline-flex">
    <div v-for="(data, index) in responseData" :key="index" class="card" style="width:18rem">
      <img :src="data.thumbnailUrl" class="car-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title text-truncate">{{ data.title }}</h5>
        <a :href="data.url" class="btn btn-primary"> Voir l'image {{ data.id }}</a>
      </div>
    </div>
 </div>
</template>

<script>

export default {
  name: "PhotosRow",
  data() {
    return{
      apiUrl: "https://jsonplaceholder.typicode.com/photos",
      responseData: null
    }
  },
  methods: {
    fetchApi() {
      // Afficher les photos
      this.axios.get(this.apiUrl)
          .then((response) => {
            this.responseData = response.data;
            console.log(response.data);
          }).catch((error) => {
            console.log(error)
      })
    }
  },
  mounted() {
    this.fetchApi();
  }
}
</script>

<style scoped>
.card {
  margin: 15px
}
</style>