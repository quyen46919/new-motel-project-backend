/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-spread */
function powerLaw(alpha) {
  const sign = Math.random() < 0.5 ? -1 : 1;
  const uniform = Math.random();
  return sign * Math.pow(1 - uniform, 1 / (1 - alpha));
}

module.exports = function (J, n) {
  let thetas = Array.apply(null, Array(n));
  thetas = thetas.map(() => Math.random() * 10 - 5);

  let count = 0;
  const LIMIT = 100000;
  const SIGMA = 2;
  while (count < LIMIT) {
    count++;
    const temp = thetas.map((theta) => theta + SIGMA * powerLaw(5));
    if (J(temp) <= J(thetas)) {
      thetas = temp;
    }
  }
  return thetas;
};
