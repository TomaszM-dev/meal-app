<script setup>
import store from '../store';
import { useRouter, useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue'
import Meals from '../components/Meals.vue'
const letters = "ABCDEFGHIJKLMNOUPRSTWXYZ".split("")
const meals = computed(() => store.state.searchedByLetter)

const router = useRouter()
const route = useRoute()




onMounted(() => {
  store.dispatch("searchByLetter", route.params.letter)
})

watch(route, () => {
  store.dispatch("searchByLetter", route.params.letter)
})




</script>

<template>
  <div class="flex flex-col p-8 justify-center w-full gap-10  ">
    <h1 class="text-[2.6rem] text-orange-500 font-semibold">Meals By Letter</h1>
    <div class="flex gap-3 w-full justify-center">

      <div class="" v-for="(letter, index) of letters" :key="index">
        <router-link :to="{ name: 'byLetter', params: { letter } }">
          <p :class="{ 'text-orange-500': route.params.letter === letter }">
            {{ letter }}
          </p>
        </router-link>

      </div>
    </div>
    <div class="flex justify-center gap-2">
      <Meals :meals="meals" />
    </div>
  </div>
</template>
<style scope></style>