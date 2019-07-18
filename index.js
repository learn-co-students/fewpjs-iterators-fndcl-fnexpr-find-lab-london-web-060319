const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const result = array.find(item => {
    return item.result === "W"
  })
return result === undefined ? undefined : result.year
}