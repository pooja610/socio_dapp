const SocioDapp = artifacts.require("SocioDapp");

module.exports = function(deployer) {
  deployer.deploy(SocioDapp);
};
