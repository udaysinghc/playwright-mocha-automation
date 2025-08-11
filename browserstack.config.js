// browserstack.config.js
export default {
    auth: {
      username: process.env.BROWSERSTACK_USERNAME || 'sumitsahu_uoAK9t',
      access_key: process.env.BROWSERSTACK_ACCESS_KEY || 'ghvSdzxyu5sqPZNNZMmq',
    },
    testDir: './src/tests',
  
    projects: [
      {
        name: 'Samsung Galaxy S23 - Chrome',
        use: {
          browserName: 'chromium',
          viewport: null,
          channel: 'chrome',
          'browserstack.device': 'Samsung Galaxy S23',
          'browserstack.osVersion': '13.0',
          'browserstack.realMobile': true,
          'browserstack.buildName': 'Android Web Tests',
          'browserstack.debug': true,
          'browserstack.networkLogs': true,
          'browserstack.console': 'info',
        },
      },
      {
        name: 'Pixel 7 - Chrome',
        use: {
          browserName: 'chromium',
          viewport: null,
          channel: 'chrome',
          'browserstack.device': 'Google Pixel 7',
          'browserstack.osVersion': '13.0',
          'browserstack.realMobile': true,
          'browserstack.buildName': 'Android Web Tests',
          'browserstack.debug': true,
          'browserstack.networkLogs': true,
          'browserstack.console': 'info',
        },
      },
      {
        name: 'Samsung Galaxy Note 20 - Chrome',
        use: {
          browserName: 'chromium',
          viewport: null,
          channel: 'chrome',
          'browserstack.device': 'Samsung Galaxy Note 20',
          'browserstack.osVersion': '11.0',
          'browserstack.realMobile': true,
          'browserstack.buildName': 'Android Web Tests',
          'browserstack.debug': true,
          'browserstack.networkLogs': true,
          'browserstack.console': 'info',
        },
      },
      {
        name: 'OnePlus 9 - Chrome',
        use: {
          browserName: 'chromium',
          viewport: null,
          channel: 'chrome',
          'browserstack.device': 'OnePlus 9',
          'browserstack.osVersion': '11.0',
          'browserstack.realMobile': true,
          'browserstack.buildName': 'Android Web Tests',
          'browserstack.debug': true,
          'browserstack.networkLogs': true,
          'browserstack.console': 'info',
        },
      },
    ],
  
    use: {
      headless: false,
      screenshot: 'on',
      video: 'on',
      trace: 'off',
    },
  };
  