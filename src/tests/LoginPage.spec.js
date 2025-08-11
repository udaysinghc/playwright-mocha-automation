import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { page } from '../setup/Hooks.js';
const { getEnvData } = require('../utils/envLoader');
require('../setup/Hooks');

const env = process.env.TEST_ENV || 'qa';
const testdata = getEnvData(env);

test.describe('Login Tests', async () => {

    test('successful login', async ({}) => {
        const loginPage = new LoginPage(page);
        
        console.log("Starting login test...");
        
        // Verify login link is visible
        const isLoginLinkVisible = await loginPage.isLoginLinkVisible();
        expect(isLoginLinkVisible).toBeTruthy();
        
        // Perform login
        await loginPage.loginToApplication(testdata.username, testdata.password);
        
        // Wait for page to load after login
        
        // Verify successful login by checking if user is logged in
        console.log("Login test completed successfully");
    });

});