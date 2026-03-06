import {test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'


test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test('verify title', async ({page}) =>{
    await expect(page).toHaveTitle('Swag Labs')
})

test('verify page title and login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
})

test('login with invalid password', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'abc123')
    await expect(page.getByText('Epic sadface')).toBeVisible()
})

test('login with empty password', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', '')
    await expect(page.getByText('Epic sadface')).toBeVisible()
})

