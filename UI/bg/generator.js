/**
 * Generates random integers between min and max, both inclusive.
 * Source: https://kadimi.com/negative-random/
 */
const genRan = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rows = 10;
const columns = 10;

let s = Array(columns).fill([0, 0]);
let a = [],
  y = -70;
for (let i = 0; i < rows; i++) {
  let b = [],
    x = -70;
  for (let j = 0; j < columns; j++) {
    if (i == 0) {
      let xNew = genRan(30, 70);
      xNew = Math.floor(xNew);
      if (j % 2 == 0) {
        let xNew = s[j][0];
        let yNew = s[j][1];
        b.push([xNew, yNew]);
      } else {
        b.push([x, y + genRan(30, 70)]);
      }
      x += xNew;
    } else if (i % 2 == 0) {
      let xNew = genRan(30, 70);
      xNew = Math.floor(xNew);
      if (j % 2 == 0) {
        let xNew = a[i - 1][j][0];
        let yNew = a[i - 1][j][1];
        b.push([xNew, yNew]);
      } else {
        b.push([x, y + genRan(30, 70)]);
      }
      x += xNew;
    } else {
      let xNew = genRan(30, 70);
      xNew = Math.floor(xNew);
      if (j % 2 == 0) {
        b.push([x, y + genRan(30, 70)]);
      } else {
        let xNew = a[i - 1][j][0];
        let yNew = a[i - 1][j][1];
        b.push([xNew, yNew]);
      }
      x += xNew;
    }
  }
  a.push(b);
  y += genRan(30, 70);
}

console.log(a);

let polyHtmlContainer = '';
const bgClasses = ['bg-1', 'bg-2', 'bg-3'];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length - 2; j++) {
    // Select a random background class
    const k = genRan(0, 2);
    // console.log(k)
    const bgClass = bgClasses[k];

    // Get row
    row = a[i];

    // Construct polygon HTML
    const polyHtml = `
      <polygon
      class="${bgClass}"
      points="
        ${row[j][0]} ${row[j][1]},
        ${row[j + 1][0]} ${row[j + 1][1]},
        ${row[j + 2][0]} ${row[j + 2][1]}
      " />`;
    polyHtmlContainer += polyHtml.replace(/\s+/g, ' ') + '\n';
  }
}

console.log(polyHtmlContainer);
