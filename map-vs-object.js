function runMap(n) {
  const themap = new Map();
  for (let i = 0; i < n; i++) {
    let v = `k:${i}`;
    if (!themap.get(v)) {
      themap.set(v, i);
    }
  }
}

function runObject(n) {
  const obj = {};
  for (let i = 0; i < n; i++) {
    let v = `k:${i}`;
    if (!obj[v]) {
      obj[v] = 1;
    }
  }
}

const test = {
  map: (n) => {
    const start = performance.now();
    runMap(n);
    const end = performance.now();
    return end - start;
  },
  object: (n) => {
    const start = performance.now();
    runObject(n);
    const end = performance.now();
    return end - start;
  }
}

const cases = [100, 1000, 10000, 100000, 1000000];

cases.forEach(function(c) {

  const map = test.map(c);
  const obj = test.object(c);
  const ratio = map / obj;
  const isMapFaster = map < obj;

  console.log(`test with n = ${c}`, { isMapFaster, 'map / obj': ratio, map, obj });
});
