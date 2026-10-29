<template>
  <Header/>
  <NuxtPage />
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { download } from "./download-publish-sheet.js"
import { load } from "./build.js"

//download();
//load();

</script>

<style>
  @import './assets/base.css';


</style>
