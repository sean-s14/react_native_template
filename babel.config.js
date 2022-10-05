module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-root-import',
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": [
          "API_URL_DEV",
          "API_URL_PROD",
        ],
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ],
  };
};
