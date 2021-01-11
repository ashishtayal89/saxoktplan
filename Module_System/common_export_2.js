const log = () => {
  console.log("common 2");
};

module.exports = log;
exports.a = 1;
module.exports.default = log;
module.exports.log = log;
