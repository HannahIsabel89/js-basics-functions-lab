function distanceFromHqInBlocks(block) {
    if (block > 42) {
      return (block - 42);
    }else return (42 - block);
  }
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(34));
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) *264;
  }
  
  console.log (distanceFromHqInFeet(50));
  console.log(distanceFromHqInFeet(34));
  
  function distanceTravelledInFeet(b1, b2) {
    if (b1>b2) {
      return ((b1-b2)*264);
    } else {
      return ((b2-b1)*264);
    }
  }
  console.log(distanceTravelledInFeet(43, 48));
  console.log(distanceTravelledInFeet(50, 60));
  console.log(distanceTravelledInFeet(34, 28));
  
  function calculatesFarePrice (b1, b2) {
    const distance = distanceTravelledInFeet (b1, b2);
      if (distance < 400) {
        return 0;
      } else if (distance <= 2000) {
          return ((distance - 400)*0.02);
      } else if (distance <= 2500)
          return (25);
        else {
          return ("Cannot travel that far");
        }
    }
  console.log(calculatesFarePrice(43, 44));
  console.log(calculatesFarePrice(34, 32));
  console.log(calculatesFarePrice(50, 58));
  console.log(calculatesFarePrice(34, 24));