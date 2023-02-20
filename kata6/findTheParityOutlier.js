function findOutlier(integers) {
  let evenOutlier = integers.filter((a) => a % 2 === 0);
  let oddOutlier = integers.filter((a) => a % 2 !== 0);
  return evenOutlier.length === 1 ? evenOutlier[0] : oddOutlier[0];
}
