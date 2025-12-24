import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.allProductList="div[class*='card'] h4 a";
        this.addProduct="[onclick*='addToCart']";
        this.addedProduct="(//*[@class='table-responsive']/descendant::td/following::td)[1]";
        this.cartButton= "[id='cartur']"
        this.placOrderButton="[data-target*='#orderModal']";
        this.nameInputField="[id='name']";
        this.countryInputField="[id='country']";
        this.cityInputField="[id='city']";
        this.cardInputField="[id='card']";
        this.monthInputField="[id='month']";
        this.yearInputField="[id='year']";
        this.purchaseButton="[onclick*='purchaseOrder']";
        this.okButton="[class*='confirm btn btn']"
    }

    async addProductTocart(productName)
    {
        await this.actions.clickElementByText(this.allProductList, productName, true);
        await this.actions.click(this.addProduct);
    }

    async checkProductAddToCart(productName)
    {
        await this.actions.click(this.cartButton);
        await this.page.locator(this.addedProduct).first().waitFor({ state: 'visible' , timeout: 10000 });
        const product=await this.page.locator(this.addedProduct).textContent();
        return product === productName;
    }

    async placeAnOrder(name, countryName, cityName, cardName, month, year)
    {
        await this.actions.click(this.placOrderButton);
        await this.actions.fill(this.nameInputField, name);
        await this.actions.fill(this.countryInputField, countryName);
        await this.actions.fill(this.cityInputField, cityName)
        await this.actions.fill(this.cardInputField,cardName);
        await this.actions.fill(this.monthInputField, month);
        await this.actions.fill(this.yearInputField, year);
        await this.actions.click(this.purchaseButton);
        await this.actions.click(this.okButton);

    }
}
