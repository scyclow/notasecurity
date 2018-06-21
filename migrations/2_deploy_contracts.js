'use strict';

const NotASecurity = artifacts.require('NotASecurity');

module.exports = (deployer) => {
  deployer.deploy(NotASecurity, 0, { gas: 4700000 });
}
