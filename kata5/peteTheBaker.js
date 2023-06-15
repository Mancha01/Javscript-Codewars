// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

//Solution I:
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0), //logical OR(||) short circuit evaluation
      val
    );
  }, Infinity);
}

//Solution II:
const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)) //logical OR(||) short circuit evaluation in the preceding logic
  );

//Solution III:
function cakes(recipe, available) {
  var numCakes = [];

  for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }

  return Math.min.apply(null, numCakes);
}

//Explanation:
// The minimum value calculated in these solutions represents the limiting factor in terms of the number of cakes that can be baked. In other words, it represents the maximum number of cakes that can be baked while still utilizing all the available ingredients according to the recipe.

// Let's consider an example to illustrate this. Suppose Pete has a recipe that requires three ingredients: flour, sugar, and eggs. The recipe specifies that he needs 200g of flour, 100g of sugar, and 2 eggs to make one cake. Additionally, Pete has the following quantities of ingredients available: 500g of flour, 250g of sugar, and 6 eggs.

// Using the provided solutions, we can calculate the maximum number of cakes Pete can bake based on the available ingredients.

// Solution 1:

// The calculation for each ingredient would be:
// Flour: Math.floor(500 / 200) = 2
// Sugar: Math.floor(250 / 100) = 2
// Eggs: Math.floor(6 / 2) = 3
// The minimum value among these calculations is 2.
// Therefore, Pete can bake a maximum of 2 cakes based on the available ingredients.
// Solution 2:

// The calculation for each ingredient would be:
// Flour: Math.floor(500 / 200) = 2
// Sugar: Math.floor(250 / 100) = 2
// Eggs: Math.floor(6 / 2) = 3
// The minimum value among these calculations is 2.
// Therefore, Pete can bake a maximum of 2 cakes based on the available ingredients.
// Solution 3:

// The calculation for each ingredient would be:
// Flour: Math.floor(500 / 200) = 2
// Sugar: Math.floor(250 / 100) = 2
// Eggs: Math.floor(6 / 2) = 3
// The minimum value among these calculations is 2.
// Therefore, Pete can bake a maximum of 2 cakes based on the available ingredients.
// In all three solutions, the minimum value among the ingredient calculations determines the maximum number of cakes Pete can bake while still utilizing all the available ingredients according to the recipe.
