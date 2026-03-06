import { Locator, Page, expect } from "@playwright/test";

export class CartPage{

    readonly page: Page
    readonly cartButton: Locator
    readonly pageText: Locator
    readonly checkoutButton: Locator

    constructor(page: Page){
        this.page = page 
        this.cartButton = page.locator('.shopping_cart_link')
        this.pageText = page.locator('.title')
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'})
    }

    async openCart(){
        await this.cartButton.click()
    }

    async expectPageIsLoaded(){
        await expect(this.pageText).toHaveText('Your Cart')
    }

    async clickCheckout(){
        await this.checkoutButton.click()
    }




}