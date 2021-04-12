var count = 0;

function cc(card) {
  if (card <= 6 && card >= 2) {
    count++;
  } else if (card <= 9 && card >= 7) {
    count--;
  } else if (card === 10) {
    return;
  } else if (card === "A") {
    return;
  } else if (card === "K") {
    return;
  } else if (card === "J") {
    return;
  } else if (card === "Q") {
    return;
  } else {
    console.log("nothing to matched");
  }
  console.log(count);
  return count;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
