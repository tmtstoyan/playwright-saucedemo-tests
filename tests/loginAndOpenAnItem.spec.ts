import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { InventoryPage } from '../page-objects/InventoryPage'
import { ItemDetailsPage } from '../page-objects/ItemDetailsPage'


test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
})


test('open backpack item from the inventory page', async ({page}) =>{
    
    const inventoryItem = new InventoryPage(page)
    await inventoryItem.openItem('Sauce Labs Backpack')
    await expect(page).toHaveURL(/inventory-item\.html\?id=4/)
})

test('open t-shirt item from the inventory page', async ({page}) =>{

    const inventoryItem = new InventoryPage(page)
    await inventoryItem.openItem('Sauce Labs Bolt T-Shirt')
    await expect(page).toHaveURL(/inventory-item\.html\?id=1/)
})

test('open item and add to cart', async ({page})=>{

    const inventoryItem = new InventoryPage(page)
    const itemDetails = new ItemDetailsPage(page)
    await inventoryItem.openItem('Sauce Labs Bolt T-Shirt')
    await expect(page).toHaveURL(/inventory-item\.html\?id=1/)    
    await itemDetails.expectAddToCartToBeVisible()
    await itemDetails.addToCart()
    await itemDetails.expectRemoveButtonToBeVisible()
})

