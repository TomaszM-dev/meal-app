import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealById({ commit }, id) {
  axiosClient.get(`lookup.php?i=${id}`).then(({ data }) => {
    commit("setCurrentMeal", data.meals[0]);
  });
}
export function searchByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setSearchedByLetter", data.meals);
  });
}

export function searchedMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setSearchedByIngredient", data.meals);
  });
}
