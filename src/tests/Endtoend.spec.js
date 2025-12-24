import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import {HomePage} from '../pages/HomePage.js'
import { page, testData } from '../setup/Hooks.js';
require('../setup/Hooks');

test.describe('Login Tests', async () => {

    test('Complete End To End Flow', async ({}) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        
        console.log("Starting login test...");
        
        // Verify login link is visible
        const isLoginLinkVisible = await loginPage.isLoginLinkVisible();
        expect(isLoginLinkVisible).toBeTruthy();
        
        // Perform login
        await loginPage.loginToApplication(testData.username, testData.password);
        
        // Wait for page to load after login
        
        // Verify successful login by checking if user is logged in
        console.log("Login test completed successfully");

        await homePage.addProductTocart(testData.productName);

        const isProductVisisble = await homePage.checkProductAddToCart(testData.productName);
        // expect(isProductVisisble).toBeTruthy();

        await homePage.placeAnOrder(testData.name, testData.countryName, testData.cityName, testData.cardNumber, testData.month, testData.year);
        
        

    });

});