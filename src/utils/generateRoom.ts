const numberRoom = [];

function generateNumberRoom() {
  const numberRandom = Math.round(Math.random() * 9);
  
  return numberRandom;
}

for(let i = 0; i < 6; i++) {
  const roomRandom = generateNumberRoom();
  numberRoom.push(roomRandom)
}

export default numberRoom.toString().replace(/,/g, "")
