import { test, expect } from '@playwright/test';

test('Add a specific product to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name : 'Login'}). click();
await expect(page.getByText('Products')).toBeVisible();
const backpack = page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' });
await expect(backpack). toBeVisible();
await backpack.getByRole('button', { name : 'Add to Cart'}). click();
const bikelight = page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bike Light' });
await expect(bikelight).toBeVisible();
await bikelight.getByRole('button', { name: 'Add to Cart' }).click();
});