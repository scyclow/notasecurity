'use strict';

const NotASecurity = artifacts.require('NotASecurity');

module.exports = (deployer) => {
  deployer.deploy(NotASecurity, { gas: 4700000 });
}
