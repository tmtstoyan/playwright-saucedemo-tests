import { Locator, Page, expect } from "@playwright/test";

export class ItemDetailsPage{

    readonly page: Page
    readonly addToCartBttn: Locator
    readonly removeButton: Locator 

    constructor(page: Page){
        this.page = page
        this.addToCartBttn = page.getByRole('button', {name:'Add to cart'})
        this.removeButton = page.getByRole('button', {name:'Remove'})

    }

    async addToCart(){
       await this.addToCartBttn.click()
    }

    async expectAddToCartToBeVisible(){
        await expect(this.addToCartBttn).toBeVisible()
    }

    async expectRemoveButtonToBeVisible(){
        await expect(this.removeButton).toBeVisible()
    }

}