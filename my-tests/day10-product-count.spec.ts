import { test, expect } from '@playwright/test';

test('Verify product count', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name : 'Login'}). click();
const product = page.locator('.inventory_item');
await expect(product).toHaveCount(6);
const inventory = product. filter({ hasText : 'Sauce Labs Backpack'}); 
await expect(inventory).toHaveCount(1);
const backpack = product. filter ({ hasText : 'Sauce Labs Backpack'});
await expect(backpack). toHaveCount(1);
const bikelightlocator = product. filter ({ hasText : 'Sauce Labs Bike Light'});
await expect(bikelightlocator). toHaveCount(1);
});