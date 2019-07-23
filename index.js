const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(game){
  const winner= game.find(record=>record.result==="W");
  return (winner ? winner.year :undefined);
}