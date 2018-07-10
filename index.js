var recipes = {}
var newRecipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  newRecipes = object.assign({}, object)
  newRecipes[key] = value;
  return newRecipes
}