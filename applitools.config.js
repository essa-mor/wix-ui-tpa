const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

const config = {
  config: merge(privateConfig, {
    serverUrl: process.env.APPLITOOLS_SERVER_URL,
    concurrency: 50,
    branchName: process.env.TPA_BRANCH_NAME,
    baselineBranchName: process.env.TPA_BASELINE_BRANCH_NAME,
    parentBranchName: process.env.TPA_BASELINE_BRANCH_NAME,
  }),
};

module.exports = applitoolsConfig(config);
