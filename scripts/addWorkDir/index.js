// eslint-disable-next-line @typescript-eslint/no-var-requires
const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];
console.log(layer)
if (!layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' или ')}, а не ${layer}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
