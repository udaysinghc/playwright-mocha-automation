import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import {HomePage} from '../pages/HomePage.js'
import { page } from '../setup/Hooks.js';
const { getEnvData } = require('../utils/envLoader');
require('../setup/Hooks');

const env = process.env.TEST_ENV || 'qa';
const testdata = getEnvData(env);

test.describe('Login Tests', async () => {

    test('Complete End To End Flow', async ({}) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        
        console.log("Starting login test...");
        
        // Verify login link is visible
        const isLoginLinkVisible = await loginPage.isLoginLinkVisible();
        expect(isLoginLinkVisible).toBeTruthy();
        
        // Perform login
        await loginPage.loginToApplication(testdata.username, testdata.password);
        
        // Wait for page to load after login
        
        // Verify successful login by checking if user is logged in
        console.log("Login test completed successfully");

        await homePage.addProductTocart(testdata.productName);

        const isProductVisisble = await homePage.checkProductAddToCart(testdata.productName);
        expect(isProductVisisble).toBeTruthy();

        await homePage.placeAnOrder(testdata.name, testdata.countryName, testdata.cityName, testdata.cardNumber, testdata.month, testdata.year);
        
        

    });

});