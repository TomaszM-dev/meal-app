<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient'
import Meals from '../components/Meals.vue';

const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const { data } = await axiosClient.get('/random.php')
    meals.value.push(data.meals[0])
  }
})



</script>

<template>
  <div class="flex flex-col p-8 justify-center w-full gap-10  ">
    <h1 class="text-[2.6rem] text-orange-500 font-semibold">Random Meals</h1>
    <div class="flex justify-center gap-2">
      <Meals :meals="meals" />
    </div>

  </div>
</template>
