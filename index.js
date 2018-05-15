let ar = [];
let line = [];

for (let c = 0; c < 50; c++) line.push(' ');
for (let l = 0; l < 10; l++) ar.push([].concat(line));

const sym = '▉';

for (let i = 0; i < 5; i++) {
	ar[0][i] = sym;
	ar[5][i] = sym;
	ar[i][2] = sym;

	ar[1][i + 6]  = sym;
	ar[5][i + 6]  = sym;
	ar[1][i + 12] = sym;
	ar[5][i + 12] = sym;
	ar[1][i + 18] = sym;
	ar[3][i + 18] = sym;
}
for (let i = 0; i < 3; i++) {
	ar[i + 2][6] = sym;
	ar[i + 2][10] = sym;
	ar[i + 5][10] = sym;
	ar[i + 7][10] = sym;
	ar[i + 2][12] = sym;
	ar[i + 2][16] = sym;
	ar[i + 2][18] = sym;
	ar[i + 3][18] = sym;
	ar[9][i + 8] = sym
}

ar[2][22] = sym;
ar[4][21] = sym;
ar[5][22] = sym;
ar[8][7] = sym;
ar[7][8] = sym;

const result = ar.map(line => line.join('')).join('\n');

module.exports = result;
