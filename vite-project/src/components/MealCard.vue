<script setup>
const { meal } = defineProps({
  meal: {
    require: true,
    type: Object
  }
})

console.log(meal)
</script> 

<template>
  <div class="shadow-md rounded-lg flex flex-col   bg-white">
    <img class=" rounded-t-xl h-56 object-cover" :src="meal.strMealThumb" />
    <div class="px-3">

      <h3 class=" py-2 text-[1.2rem] font-semibold ">{{ meal.strMeal }}</h3>
      <p v-if="meal.strInstructions">{{ meal.strInstructions.slice(0, 142) }} (...)</p>
      <div class=" py-2 flex gap-5 mt-4 items-center">
        <a target="_blank" class="bg-red-500 rounded-lg py-2 px-6 text-white" :href="meal.strYoutube">Youtube</a>
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">

          <button class="uppercase font-bold">view</button>
        </router-link>
      </div>
    </div>
  </div>
</template> 
<style scope></style>