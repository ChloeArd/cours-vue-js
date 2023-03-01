<template>
  <div class="row d-inline-flex">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" name="post.title" class="form-control" placeholder="Titre" v-model="post.title">
      </div>
      <br><br>
      <div class="form-group">
        <textarea name="post.body" class="form-control" placeholder="Body..." v-model="post.body"></textarea>
      </div>
      <br><br>
      <div class="form-group">
        <button class="btn btn-primary">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostStore",
  data() {
    return {
      post: {

      },
      responseData: null
    }
  },
  methods : {
    onSubmit() {
      if (this.post.title && this.post.body) {
        this.responseData = null;
          let body = JSON.stringify({
          userId: 2,
          title: this.post.title,
          body: this.post.body
        });

        this.axios.post("https://jsonplaceholder.typicode.com/posts", body)
            .then(response => {
              console.log(response);
              console.log(response.status);
              this.responseData = response.data;
              // 201 que tous est bon et que c'est ajouter !
              if (response.status === 201) {
                console.log("Post ajouté : " + JSON.stringify(this.responseData));
                // Vider le post
                this.post = {}
              }
            })
            .catch(error => {
              console.log(error)
            });
      }
    }
  }
}
</script>

<style scoped>

</style>