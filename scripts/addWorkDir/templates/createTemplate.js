const fs = require('fs/promises');
const resolveRoot = require('./resolveRoot');
const createModel = require('../templates/slices/model/addModel');
const createUI = require('../templates/slices/ui/createUI');
// const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.log(`не удалось создать директорию для слайса${sliceName}`);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  // await createPublicApi(layer, sliceName);
};
