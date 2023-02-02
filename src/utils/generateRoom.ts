let numberRoom: number[] = [];

function generateNumberRoom() {
  const numberRandom = Math.round(Math.random() * 9);
  
  return numberRandom;
}

export function generateRandomRoom() {
  numberRoom = [];
  for(let i = 0; i < 6; i++) {
    const roomRandom = generateNumberRoom();
    numberRoom.push(roomRandom)
  }
  return numberRoom.toString().replace(/,/g, "");
}

