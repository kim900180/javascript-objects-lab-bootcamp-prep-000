var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndVlue(object, key, value) {
  delete object[key]
  return object
}