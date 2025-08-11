const fs = require('fs');
const path = require('path');

function getEnvData(env) {
  const filePath = path.resolve(__dirname, `../testdata/env/${env}.json`);
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (err) {
    throw new Error(`❌ Cannot load environment file for '${env}' at ${filePath}`);
  }
}

module.exports = { getEnvData };
