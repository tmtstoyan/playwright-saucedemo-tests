import { Page, expect } from "@playwright/test";

export class InventoryPage{

    readonly page: Page
   
    constructor(page: Page){
        this.page = page
    }

    async openItem(itemName: string){
        const item = this.page.locator('.inventory_item_name ').filter({hasText: itemName})
        await item.click()
    }

}