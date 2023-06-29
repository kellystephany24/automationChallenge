var args = require('minimist')(process.argv.slice(2));

export const config = {
  env: args.env,
};