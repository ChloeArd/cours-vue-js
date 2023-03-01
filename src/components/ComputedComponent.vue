<!-- Computed-->
<template>
  <div class="computed">
    <!-- Si text1Clicked vaut true alors il valera false -->
    <p
        :class="text1Clicked ? 'red' : null"
        v-text="text1"
        @click="text1Clicked = !text1Clicked"
    ></p>

    <p>{{ getClassText1() }}</p>

    <p
        :class="text2Clicked ? 'blue' : null"
        v-text="text2"
        @click="text2Clicked = !text2Clicked"
    ></p>

    <p>{{ getClassText2 }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "Hello",
      text2: "Bye bye",
      text1Clicked: false,
      text2Clicked: false
    }
  },
  methods: {
    getClassText1() {
      console.log("Text1 modifié")
      // Si le text est cliquer tu affiché option1 sinon option2
      return this.text1Clicked ? "Class de text1 : red" : "Text1 sans class"
    }
  },
  computed: { // Quand on ne la clique pas, elle ne vas pas s'éxecuter à chaque fois que l'on va cliquer sur getClassText1()
    getClassText2() {
      console.log("Text2 modifié")
      // Si le text est cliquer tu affiché option1 sinon option2
      return this.text2Clicked ? "Class de text2 : blue" : "Text2 sans class"
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>