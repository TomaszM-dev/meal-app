export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setCurrentMeal(state, meal) {
  state.currentMeal = meal || {};
}

export function setSearchedByLetter(state, meals) {
  state.searchedByLetter = meals || [];
}

export function setSearchedByIngredient(state, meals) {
  state.searchedMealsByIngredient = meals || [];
}

export function setIngredient(state, ingredient) {
  state.setIngredient = ingredient || "";
}
