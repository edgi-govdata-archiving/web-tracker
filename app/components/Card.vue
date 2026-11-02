<template>
    <section class="card">
    <h4>{{title}}</h4>
    <div v-for="tag in tags">{{tag}}</div>
    <p>{{description}}</p>
    <div>Agency: {{agency}}</div>
    <div>Date: {{date}}</div>
    <button>Visit Page</button>
    <button>Visit Archive</button>
    </section>
</template>

<script>

import pageData from "../data-cache/pages.json"

export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
    agency: String,
    date: String,
    pageLink: String,
    archiveLink: String,
    tags: Array,
  }
}

</script>

<style scoped>

.card{
  padding: 10px;
  width: 400px;
  align-items: center;
  background-color: #eeeeee;
  margin-bottom: 5px;
}


</style>