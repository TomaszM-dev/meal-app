<script setup>
import store from '../store';
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const meals = computed(() => store.state.searchedMealsByIngredient)


onMounted(() => {
  store.dispatch("searchedMealsByIngredient", route.params.ingredient)
})


</script>

<template>
  <div>
    <div class="mt-10 px-4 ">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ route.params.ingredient }}</h1>
    </div>

    <!-- <div v-for="meal of meals" :key="meal.idMeal"> -->
    <Meals :meals="meals" />
    <!-- </div> -->
  </div>
</template>
<style scope></style>