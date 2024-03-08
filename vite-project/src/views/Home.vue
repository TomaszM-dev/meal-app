<script setup>
import { computed } from 'vue'
import store from '../store'

const meals = computed(() => store.state.meals)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


</script>

<template>
  <div class="flex flex-col p-8 justify-center gap-10  ">

    <input placeholder="search for meals" type="text" class="rounded border-2 border-gray-200 w-fit " />

    <div class="flex justify-center gap-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="(letter, index) of letters" :key="index">{{
        letter
      }}</router-link>
    </div>
  </div>
</template>
