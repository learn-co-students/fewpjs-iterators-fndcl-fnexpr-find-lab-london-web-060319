const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const hasWon = array.find(match => match.result === "W")
  if (hasWon) {
    return hasWon.year
  }
}
