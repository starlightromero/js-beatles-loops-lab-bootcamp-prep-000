function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (i = 0; i < 4; i++) {
    array.push(musicians + ' plays ' + instruments)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  while (array.length < facts.length ) {
    array.push(facts + "!!!")
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}
