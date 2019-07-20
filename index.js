const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const winner = array.find(record => record.result === "W")
  return winner ? winner.year : undefined
}
