import { Actions } from '../utils/actions.js';

export class BasePage {
    constructor(page) {
        this.page = page;
        this.actions = new Actions(page);
    }

    // Common page methods that all pages can use
    async navigateTo(url) {
        await this.actions.goto(url);
    }

    async getPageTitle() {
        return await this.actions.getTitle();
    }

    async getCurrentUrl() {
        return await this.actions.getCurrentURL();
    }

    async waitForPageLoad() {
        await this.actions.waitForLoadState('load');
    }

    async waitForNetworkIdle() {
        await this.actions.waitForLoadState('networkidle');
    }

    async takePageScreenshot(path) {
        return await this.actions.takeScreenshot({ path });
    }

    async scrollToTop() {
        await this.actions.scrollToTop();
    }

    async scrollToBottom() {
        await this.actions.scrollToBottom();
    }

    async refreshPage() {
        await this.actions.reload();
    }

    async goBack() {
        await this.actions.goBack();
    }

    async goForward() {
        await this.actions.goForward();
    }

    // Common element interaction methods
    async clickElement(locator) {
        await this.actions.click(locator);
    }

    async fillElement(locator, text) {
        await this.actions.fill(locator, text);
    }

    async getElementText(locator) {
        return await this.actions.getText(locator);
    }

    async isElementVisible(locator) {
        return await this.actions.isVisible(locator);
    }

    async waitForElement(locator) {
        await this.actions.waitForSelector(locator);
    }

  
}