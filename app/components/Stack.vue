<template>
    <section class="stack">
    <Card v-for="page in pages" 
          :title="page.title"
          :description="page.description"
          :agency="page.agency"
          :date="page.date"
          :tags="page.tags" />
    </section>
</template>

<script>

import Card from "./Card.vue"

export default {
  name: 'Stack',
  components: {
  	Card
  },
  props: {
	pages : {
	    type : Array,
	    default : () => [	
	    {
	    	title: "First Card Title",
    		description: "This is the first card description.",
    		tags: ["tag1", "tag2"],
    		agency: "EPA",
    		date: "2026-01-01"
    	},
    	{
    		title: "Second Card Title",
    		description: "This is the second card description.",
    		tags: ["tag3", "tag4"],
    		agency: "CDC",
    		date: "2026-02-01"
    	},
    	{
    		title: "Third Card Title",
    		description: "This is the third card description.",
    		tags: ["tag5", "tag6"],
    		agency: "FAA",
    		date: "2026-03-01"
    	}],
	}
	}
}

</script>

<style scoped>

.stack{

}


</style>