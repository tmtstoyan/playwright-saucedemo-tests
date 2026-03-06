import { Page } from '@playwright/test'

export class LoginPage{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async loginWithCredentials(username: string, password: string){
        const userName = this.page.getByPlaceholder('Username')
        const passwordField = this.page.getByPlaceholder('Password')
        await userName.fill(username)
        await passwordField.fill(password)
        await this.page.getByRole('button', {name:'Login'}).click()
    }
}