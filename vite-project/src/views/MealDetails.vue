<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue'
import store from '../store';

const route = useRoute()

const curId = route.params.id
const meal = computed(() => store.state.currentMeal)


onMounted(() => {
  store.dispatch("searchMealById", curId)
})

</script>

<template>
  <div class="max-w-[60%] pb-20 mx-auto flex flex-col  items-center mt-10 gap-4">

    <h1 class="text-[2.4rem] text-orange-500 font-bold self-start ">
      {{ meal.strMeal }}
    </h1>
    <img class="rounded-md" :src="meal.strMealThumb" />
    <div class="flex gap-10 text-[1.3rem] font-semibold">
      <p>Category: {{ meal.strCategory }}</p>
      <p>Area: {{ meal.strArea }}</p>
    </div>
    <table class="w-full mt-10">
      <tbody>
        <div class="flex gap-60">
          <td class="">
            <div class="mb-4 text-[1.4rem] font-bold">Ingredients</div>
            <div v-for="(el, index) of new Array(20)" :key="index">
              <p v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </p>
            </div>
          </td>
          <td class="h-fit">
            <div class="mb-4 text-[1.4rem] font-bold">Measure</div>
            <div v-for="(el, index) of new Array(20)" :key="index">
              <p v-if="meal[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </p>
            </div>
          </td>
        </div>
      </tbody>
    </table>

  </div>
</template> 


