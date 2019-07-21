const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const gameWin = record.find(object => object.result === "W");
  return (gameWin ? gameWin.year : undefined)
}
