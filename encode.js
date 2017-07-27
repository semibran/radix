module.exports = function encode(digits, number) {
  var base = digits.length
  var string = ""
  while (number) {
    var remainder = number % base
    var quotient = (number - remainder) / base
    var digit = digits[remainder]
    number = quotient
    string = digit + string
  }
  return string
}
