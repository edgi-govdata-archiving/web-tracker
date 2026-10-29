<template>
  <div>
   <Hero/>
   <section class="main-content">
     <div class="filters">
        <h4> Filters </h4>
     </div>
     <Stack/>
  </section>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import Stack from "../components/Stack.vue"

export default {
  name: 'Home',
  components:{
    Hero,
    Stack
  }
}


</script>

<style scoped>

.main-content{
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto;
}


</style>