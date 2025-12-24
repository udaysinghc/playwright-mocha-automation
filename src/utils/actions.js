export class Actions {
    constructor(page) {
        this.page = page;
    }

    // Navigation methods
    async goto(url) {
        await this.page.goto(url);
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async reload() {
        await this.page.reload();
    }

  // Element interaction methods
async click(locator) {
    await this.page.locator(locator).click();
}

async doubleClick(locator) {
    await this.page.locator(locator).dblclick();
}

async rightClick(locator) {
    await this.page.locator(locator).click({ button: 'right' });
}

    async fill(locator, text, options = {}) {
        await this.page.locator(locator).fill(text, options);
    }

    async type(locator, text, options = {}) {
        await this.page.locator(locator).type(text, options);
    }

    async clear(locator) {
        await this.page.locator(locator).clear();
    }

    async selectOption(locator, value, options = {}) {
        await this.page.locator(locator).selectOption(value, options);
    }

    async check(locator, options = {}) {
        await this.page.locator(locator).check(options);
    }

    async uncheck(locator, options = {}) {
        await this.page.locator(locator).uncheck(options);
    }

    async hover(locator, options = {}) {
        await this.page.locator(locator).hover(options);
    }

    async focus(locator, options = {}) {
        await this.page.locator(locator).focus(options);
    }

    async blur(locator, options = {}) {
        await this.page.locator(locator).blur(options);
    }

    // Wait methods
    async waitForSelector(locator, options = {}) {
        await this.page.waitForSelector(locator, options);
    }

    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
    }

    async waitForLoadState(state = 'load', options = {}) {
        await this.page.waitForLoadState(state, options);
    }

    async waitForURL(url, options = {}) {
        await this.page.waitForURL(url, options);
    }

    async waitForFunction(pageFunction, arg, options = {}) {
        await this.page.waitForFunction(pageFunction, arg, options);
    }

    // Element state methods
    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async isHidden(locator) {
        return await this.page.locator(locator).isHidden();
    }

    async isEnabled(locator) {
        return await this.page.locator(locator).isEnabled();
    }

    async isDisabled(locator) {
        return await this.page.locator(locator).isDisabled();
    }

    async isChecked(locator) {
        return await this.page.locator(locator).isChecked();
    }

    async isEditable(locator) {
        return await this.page.locator(locator).isEditable();
    }

    // Text and attribute methods
    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async getInnerText(locator) {
        return await this.page.locator(locator).innerText();
    }

    async getInnerHTML(locator) {
        return await this.page.locator(locator).innerHTML();
    }

    async getAttribute(locator, attributeName) {
        return await this.page.locator(locator).getAttribute(attributeName);
    }

    async getValue(locator) {
        return await this.page.locator(locator).inputValue();
    }

    // Count and element methods
    async getElementCount(locator) {
        return await this.page.locator(locator).count();
    }

    async getAllElements(locator) {
        return await this.page.locator(locator).all();
    }

    async getFirstElement(locator) {
        return this.page.locator(locator).first();
    }

    async getLastElement(locator) {
        return this.page.locator(locator).last();
    }

    async getNthElement(locator, index) {
        return this.page.locator(locator).nth(index);
    }

    // Screenshot methods
    async takeScreenshot(options = {}) {
        return await this.page.screenshot(options);
    }

    async takeElementScreenshot(locator, options = {}) {
        return await this.page.locator(locator).screenshot(options);
    }

    // Keyboard and mouse methods
    async pressKey(key, options = {}) {
        await this.page.keyboard.press(key, options);
    }

    async typeText(text, options = {}) {
        await this.page.keyboard.type(text, options);
    }

    async keyDown(key, options = {}) {
        await this.page.keyboard.down(key, options);
    }

    async keyUp(key, options = {}) {
        await this.page.keyboard.up(key, options);
    }

    async mouseClick(x, y, options = {}) {
        await this.page.mouse.click(x, y, options);
    }

    async mouseMove(x, y, options = {}) {
        await this.page.mouse.move(x, y, options);
    }

    // Dialog methods
    async acceptDialog() {
        this.page.on('dialog', dialog => dialog.accept());
    }

    async dismissDialog() {
        this.page.on('dialog', dialog => dialog.dismiss());
    }

    async getDialogMessage() {
        return new Promise((resolve) => {
            this.page.on('dialog', dialog => {
                resolve(dialog.message());
                dialog.accept();
            });
        });
    }

    // Frame methods
    async switchToFrame(frameLocator) {
        return this.page.frameLocator(frameLocator);
    }

    // Drag and drop
    async dragAndDrop(sourceLocator, targetLocator, options = {}) {
        await this.page.locator(sourceLocator).dragTo(this.page.locator(targetLocator), options);
    }

    // File upload
    async uploadFile(locator, filePath) {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    // Scroll methods
    async scrollIntoView(locator, options = {}) {
        await this.page.locator(locator).scrollIntoViewIfNeeded(options);
    }

    async scrollToTop() {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    // Local storage methods
    async setLocalStorage(key, value) {
        await this.page.evaluate(([key, value]) => {
            localStorage.setItem(key, value);
        }, [key, value]);
    }

    async getLocalStorage(key) {
        return await this.page.evaluate((key) => {
            return localStorage.getItem(key);
        }, key);
    }

    async clearLocalStorage() {
        await this.page.evaluate(() => localStorage.clear());
    }

    // Session storage methods
    async setSessionStorage(key, value) {
        await this.page.evaluate(([key, value]) => {
            sessionStorage.setItem(key, value);
        }, [key, value]);
    }

    async getSessionStorage(key) {
        return await this.page.evaluate((key) => {
            return sessionStorage.getItem(key);
        }, key);
    }

    async clearSessionStorage() {
        await this.page.evaluate(() => sessionStorage.clear());
    }

    // Cookie methods
    async getCookies() {
        return await this.page.context().cookies();
    }

    async setCookie(cookie) {
        await this.page.context().addCookies([cookie]);
    }

    async clearCookies() {
        await this.page.context().clearCookies();
    }

    // URL methods
    async getCurrentURL() {
        return this.page.url();
    }

    async getTitle() {
        return await this.page.title();
    }

    // Execute JavaScript
    async executeScript(script, ...args) {
        return await this.page.evaluate(script, ...args);
    }

      async clickElementByText(locator, targetText, exactMatch = false) {
        try {
            
            await this.page.waitForTimeout(5000);
            
            // Validate targetText parameter
            if (!targetText) {
                console.error('targetText parameter is required');
                return false;
            }
            
            // Get all elements matching the locator
            const elements = await this.page.locator(locator).all();
            
            // Normalize targetText
            const normalizedTargetText = targetText.trim();
            
            // Iterate through elements to find text match
            for (const element of elements) {
                const elementText = await element.textContent();
                const trimmedText = elementText?.trim() || '';
                
                // Check for text match (exact or partial)
                const isMatch = exactMatch 
                    ? trimmedText === normalizedTargetText
                    : trimmedText.includes(normalizedTargetText);
                
                if (isMatch) {
                    // Click on the matching element
                    await element.click();
                    return true;
                }
            }
            
            // No matching element found
            console.warn(`No element found with text "${targetText}" using locator "${locator}"`);
            return false;
            
        } catch (error) {
            console.error(`Error in clickElementByText: ${error.message}`);
            throw error;
        }
    }
}