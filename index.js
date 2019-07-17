const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(obj) {
  const win = obj.find(r => r.result === "W" )
  if (win) {return win.year}
}