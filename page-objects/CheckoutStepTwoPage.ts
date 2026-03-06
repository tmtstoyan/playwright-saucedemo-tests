import { expect, Locator, Page } from "@playwright/test";

export class CheckoutStepTwoPage{

    readonly page: Page
    readonly pageTitle: Locator
    readonly finishButton: Locator

    constructor(page: Page){
        this.page = page
        this.pageTitle = page.locator('.title')
        this.finishButton = page.getByRole('button', {name:'Finish'})
    }

    async expectLoadedPage(){
        await expect(this.pageTitle).toHaveText('Checkout: Overview')
    }

    async clickFinishButton(){
        await this.finishButton.click()
    }

}