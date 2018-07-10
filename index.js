var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key]
  return object
}