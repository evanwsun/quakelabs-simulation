const config = require("../config.js");


const roundValues = (obj, contextualKey = "") => {
  // contextual key is the key of the object being sent
  if (config.misc.serverValueRounding === false) return obj;

  Object.keys(obj).forEach(key => {
    obj[key] = checkIfRound(contextualKey + "." + key)
      ? round(obj[key])
      : obj[key];
  });

  return obj;
};

const checkIfRound = key => {
    
  return config.misc.noRound.includes(key) ? false : true;
};

const round = value => {
  return Number(
    Math.round(value + "e" + config.misc.serverValueRounding) +
      "e-" +
      config.misc.serverValueRounding
  );
};

module.exports = roundValues;
