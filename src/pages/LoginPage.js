import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.loginLink = "#login2";
        this.usernameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginButton = "//button[text()='Log in']";
    }

    async loginToApplication(username, password) {
        console.log("This is a login page..");
        await this.actions.click(this.loginLink);
        await this.actions.fill(this.usernameInput, username);
        await this.actions.fill(this.passwordInput, password);
        await this.actions.click(this.loginButton);
        // await this.actions.waitForTimeout(3000);
    }

    // Login page specific methods using actions
    async isLoginLinkVisible() {
        return await this.actions.isVisible(this.loginLink);
    }

    async waitForLoginForm() {
        await this.actions.waitForSelector(this.usernameInput);
        await this.actions.waitForSelector(this.passwordInput);
    }

    async clearLoginForm() {
        await this.actions.clear(this.usernameInput);
        await this.actions.clear(this.passwordInput);
    }

    async getLoginButtonText() {
        return await this.actions.getText(this.loginButton);
    }

    async isUsernameFieldEnabled() {
        return await this.actions.isEnabled(this.usernameInput);
    }

    async isPasswordFieldEnabled() {
        return await this.actions.isEnabled(this.passwordInput);
    }

    async isLoginButtonEnabled() {
        return await this.actions.isEnabled(this.loginButton);
    }

    async hoverOverLoginButton() {
        await this.actions.hover(this.loginButton);
    }

    async doubleClickLoginLink() {
        await this.actions.doubleClick(this.loginLink);
    }

    async focusOnUsernameField() {
        await this.actions.focus(this.usernameInput);
    }

    async typeUsernameSlowly(username) {
        await this.actions.type(this.usernameInput, username, { delay: 100 });
    }

    async takeLoginFormScreenshot(path) {
        return await this.actions.takeElementScreenshot(this.usernameInput, { path });
    }
}