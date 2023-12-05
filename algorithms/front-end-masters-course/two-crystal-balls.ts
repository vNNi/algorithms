export const two_crystal_balls = (floors: boolean[]) => {
  const jumpAmount = Math.floor(Math.sqrt(floors.length));
  let i = jumpAmount;

  for (; i < floors.length; i += jumpAmount){
    if(floors[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < floors.length; j++, i++) {
    if (floors[i]) {
      return i;
    }
  }

  return -1;
};
