function u(r) { let a = r.reduce((x, y) => x.length <= y.length ? x : y), b = a.length; for (let i = b; i >= 0; i--) for (let j = 0; j <= b - i; j++) { let s = a.substring(j, j + i); if (r.every(elem => ~elem.indexOf(s))) return s; } return ''; } let z = process.argv.length; if (z < 3) console.log(''); else console.log(u(process.argv.slice(2)));