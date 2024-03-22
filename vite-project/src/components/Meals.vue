<script setup>
import MealCard from './MealCard.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array || null
  }
})




</script>

<template>
  <div>

    <div class="grid grid-cols-3 gap-4 p-4">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div class="text-center text-[1.3rem] font-semibold" v-if="!meals.length">


      There are no meals


    </div>
  </div>
</template>