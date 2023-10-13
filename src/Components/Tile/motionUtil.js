let winsize = { width: window.innerWidth, height: window.innerHeight };

/**
 * Map number x from range [a, b] to [c, d]
 * @param {Number} x - changing value
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 */
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// Calculates the position of an element when the element is [distanceDifference]px more far from the center of the page than it was previously
const getInitialPosition = (element, distanceDifference = 400) => {
  const elCenter = {
    x: element.offsetLeft + element.offsetWidth / 2,
    y: element.offsetTop + element.offsetHeight / 2
  };
  const angle = Math.atan2(
    Math.abs(winsize.height / 2 - elCenter.y),
    Math.abs(winsize.width / 2 - elCenter.x)
  );

  let x = Math.abs(Math.cos(angle) * distanceDifference);
  let y = Math.abs(Math.sin(angle) * distanceDifference);

  return {
    x: elCenter.x < winsize.width / 2 ? x * -1 : x,
    y: elCenter.y < winsize.height / 2 ? y * -1 : y
  };
};

// Distance from the element's center point to the center of the page
const getDistance = (element) => {
  const elCenter = {
    x: element.offsetLeft + element.offsetWidth / 2,
    y: element.offsetTop + element.offsetHeight / 2
  };
  return Math.hypot(
    elCenter.x - winsize.width / 2,
    elCenter.y - winsize.height / 2
  );
};
export { getDistance, getInitialPosition, map };
