module.exports = function decode(digits, string) {
  var base = digits.length
  var length = string.length
  var number = 0
  for (var place = 1; place <= length; place++) {
    var digit = string[length - place]
    var index = digits.indexOf(digit)
    if (index !== -1) {
      var value = index * Math.pow(base, place - 1)
      number += value
    } else {
      return NaN
    }
  }
  return number
}
