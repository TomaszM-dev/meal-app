<script setup>
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const keyword = ref("")
const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
  if (keyword.value) {
    router.push({ name: 'byName', params: { name: keyword.value } })
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }

}
onMounted(() => {
  console.log(meals.value)
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<template>
  <div>
    <div>
      <div class="flex items-center justify-center mt-4">
        <input v-model="keyword" placeholder="Search for meals" type="text"
          class="rounded border-2 border-gray-200 mx-auto w-[95%] " @change="searchMeals" />
      </div>
    </div>
    <div>

    </div>
    <Meals :meals="meals" />
  </div>
</template>

<style scope></style>