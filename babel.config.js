// const { Reanimated } = require("react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
