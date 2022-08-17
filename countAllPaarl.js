function countAllPaarl(regNumbers) {
  var items = regNumbers.split(',');
  var regNumbersForPaarl = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].trim().startsWith("CJ")) {
      regNumbersForPaarl.push(items[i])
    }
  }
  return regNumbersForPaarl.length;
}

console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))