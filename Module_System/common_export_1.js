const log = () => {
  console.log("common 1");
};

exports.a = 1;
module.exports.default = log;
module.exports.log = log;
