import { Locator, Page } from "@playwright/test";

export class CheckoutStepOnePage{

    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator
    readonly continueButton: Locator

    constructor(page: Page){
        this.page = page
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.postalCode = page.getByPlaceholder('Zip/Postal Code')
        this.continueButton = page.getByRole('button', {name:'Continue'})
    }

    async fillInCheckoutInfoAndClickContinue(firstName: string, lastName: string, postalCode: string){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
        await this.continueButton.click()
    }

}