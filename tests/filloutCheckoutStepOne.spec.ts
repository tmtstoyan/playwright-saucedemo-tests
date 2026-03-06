import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { InventoryPage } from '../page-objects/InventoryPage'
import { ItemDetailsPage } from '../page-objects/ItemDetailsPage'
import { CartPage } from '../page-objects/CartPage'
import { CheckoutStepOnePage } from '../page-objects/CheckoutStepOnePage'


test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
})

test('go to cart page, click checkout and fill our form', async ({page}) =>{
    
    const inventoryItem = new InventoryPage(page)
    await inventoryItem.openItem('Sauce Labs Bolt T-Shirt')
    await expect(page).toHaveURL(/inventory-item\.html\?id=1/)  
    
    const itemDetails = new ItemDetailsPage(page)  
    await itemDetails.expectAddToCartToBeVisible()
    await itemDetails.addToCart()
    await itemDetails.expectRemoveButtonToBeVisible()

    const cart = new CartPage(page)
    await cart.openCart()
    await cart.expectPageIsLoaded()
    await cart.clickCheckout()

    await expect(page).toHaveURL(/checkout-step-one\.html/)

    const checkoutStepOne = new CheckoutStepOnePage(page)
    await checkoutStepOne.fillInCheckoutInfoAndClickContinue('Stoyan', 'Ivanov', '11111')

})