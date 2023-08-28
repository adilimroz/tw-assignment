exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'Put your browser stack username here',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'put your browserstack access key here',
  
    hostname: 'hub.browserstack.com',
  
    services: [
      [
        'browserstack',
        {
          buildIdentifier: '${BUILD_NUMBER}',
          browserstackLocal: true,
          opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
          app: process.env.BROWSERSTACK_APP_PATH || 'app/android/v7.32.1_release.apk',
        }
      ]
    ],
  
    capabilities: [{
      'bstack:options': {
        deviceName: 'Google Pixel 3',
        osVersion: "9.0"
      }
    }, {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S10e',
        osVersion: "9.0"
      }
    }],
  
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Samples",
        buildName: 'browserstack build',
        sessionName: 'BStack parallel webdriverio-appium',
        debug: true,
        networkLogs: true,
        source: 'webdriverio:appium-sample-sdk:v1.0'
      }
    },
  
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      '../test/specs/android/*.js'
    ],
    exclude: [],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(let key in exports.config.commonCapabilities) 
      caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
  });
  