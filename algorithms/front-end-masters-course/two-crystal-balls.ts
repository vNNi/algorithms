const two_crystal_balls = (floors: boolean[]) => {
  const jumpAmount = Math.floor(Math.sqrt(floors));
  let i = jumpAmount;

  for (; i < floorts.length; i += jumpAmount){
    if(floors[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
};
