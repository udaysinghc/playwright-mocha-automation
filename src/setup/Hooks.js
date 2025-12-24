const { test,expect,chromium} = require('@playwright/test');
const { getEnvData } = require('../utils/envLoader');

export let page;
export let context;
export let testData;

test.beforeAll(async () => {
  console.log('Global setup before all tests...');
  
  // Capture the environment from process.env.TEST_ENV
  const env = process.env.TEST_ENV || 'qa';
  console.log(`The environment used is ${env}`);
  
  // Load test data based on environment and set as global variable
  testData = getEnvData(env);
  console.log('Test data loaded successfully for environment:', env);
  
  // Perform any setup tasks needed for the test suite, e.g., initializing a server
  console.log("Connected to data base..")
});

test.beforeEach(async ({browser}) => {
  console.log('Setting up before each test...');
  // Common setup before each test, like navigating to the homepage
  
  context=await browser.newContext()
  page=await context.newPage()
  await page.goto(testData.BaseURL);
});

test.afterEach(async () => {
  console.log('Cleaning up after each test...');
  // Perform cleanup tasks like clearing cookies, localStorage, or sessionStorage
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  // await browser.close()
});

test.afterAll(async () => {
  console.log('Global teardown after all tests...');
  // Perform any global cleanup, like shutting down a server or database connection
  console.log("Disconnect to the data base..")
  
});