function runSet(n) {
  const theset = new Set();
  for (let i = 0; i < n; i++) {
    const v = `k:${i}`;
    if (!theset.has(v)) {
      theset.add(v, i);
    }
  }
}

function runMap(n) {
  const themap = new Map();
  for (let i = 0; i < n; i++) {
    const v = `k:${i}`;
    if (!themap.has(v)) {
      themap.set(v, i);
    }
  }
}

function runObject(n) {
  const obj = {};
  for (let i = 0; i < n; i++) {
    const v = `k:${i}`;
    if (!obj[v]) {
      obj[v] = 1;
    }
  }
}

const test = {
  set: (n) => {
    const start = performance.now();
    runSet(n);
    const end = performance.now();
    return end - start;
  },
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

cases.forEach((c) => {
  const set = test.set(c);
  const map = test.map(c);
  const obj = test.object(c);
  const stats = { set, map, obj };
  const sorted = Object.keys(stats).sort((a, b) => stats[a] - stats[b]);

  console.log(`test with n = ${c}`, stats, sorted.join(' > '));
});
