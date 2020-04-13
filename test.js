var export1 = require('./export.js').config;
console.log(export1);

var overrides = {
    // Here are all my 'beta' specific overrides:
    capabilities: [
        {
            maxInstances: 10,
            browserName: 'internet explorer',

            "se:ieOptions": {
                 ignoreZoomSetting: true,
                 ignoreProtectedModeSettings: true,
                "ie.ensureCleanSession": true
            }
        },
    ],
    baseUrl: "https://b2bbeta.snapon.com/"
};
Object.assign(overrides, export1);
console.log(overrides)
overrides.hostname = 'test';
console.log(overrides)