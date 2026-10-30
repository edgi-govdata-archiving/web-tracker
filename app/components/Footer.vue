<template>
   <footer>
    <section class="site-name">
    <h2>
      EDGI
    </h2>
    <h2>
      Federal Web Tracker
    </h2>
    </section>
    <nav>
         <NuxtLink class="link" to="https://envirodatagov.org/federal-environmental-web-tracker-about-page/">Project Home</NuxtLink>
        <NuxtLink class="link" to="https://envirodatagov.org/">EDGI Home</NuxtLink>
        <NuxtLink class="link" to="https://envirodatagov.org/contact/">Contact</NuxtLink>
    </nav>
  </footer>
</template>

<script>

</script>

<style scoped>

footer{
  padding: 10px;
  align-items: center;
  background-color: #dddddd;
}

.site-name{
  display: flex;
}

.nav{
  display: flex;
}

h2{
  padding-right: 5px;
}

.link {
  font-family: 'Mono Sans', sans-serif;
  font-size: 15px;
  padding-right: 5px;
}

</style>