<script setup>
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute, useRouter } from 'vue-router'
import axiosClient from '../axiosClient';

const router = useRouter()
const keyword = ref("")
const ingredients = ref([])

const computedIngredients = computed(() => {
  if (!computedIngredients) ingredients;
  return ingredients.value.filter((ing) => {
    return ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  })
})


const loadMealsByIngredient = (ingredient) => {
  router.push({ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } })
  store.commit("setIngredient", ingredient.strIngredient);
}

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    ingredients.value = data.meals
  })
})
</script>

<template>
  <div class="flex flex-col p-8 justify-center w-full gap-3  ">
    <h1 class="text-[2.6rem] text-orange-500 font-semibold">Ingredients</h1>
    <div class="flex items-center justify-center ">
      <input v-model="keyword" placeholder="Search for ingredients" type="text"
        class="rounded border-2 border-gray-200 mx-auto w-full " />
    </div>
    <div class="grid grid-cols-2 gap-4 ">
      <a href="#" @click.prevent="loadMealsByIngredient(ingredient)"
        class="border-2 bg-white font-semibold px-4 py-4 rounded-md text-[1.4rem]"
        v-for="ingredient of computedIngredients" :key="ingredient.idIngredient">
        {{ ingredient.strIngredient }}
      </a>
    </div>
  </div>
</template>

