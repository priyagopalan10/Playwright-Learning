import { test, expect } from '@playwright/test'; 
 
test('Role of locator', async ({ page }) => { 
 
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
const backpack = page.locator('.inventory_item'). filter({hasText : 'Sauce Labs Backpack'});
const addToCart = backpack.getByRole('button', { name : 'Add to cart'});
await expect(addToCart). toBeVisible();
});