function divide(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
  }
  if (numOne === 0) {
    return undefined;
  }
  return numOne / numTwo;
}
