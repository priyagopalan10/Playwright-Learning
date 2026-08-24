import { test, expect } from '@playwright/test';

test('Select product sort option', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
await expect(
    page.locator('[data-test="product-sort-container"]')
).toHaveValue('lohi');
const prices = page.locator('.inventory_item_price');
const pricesT = await prices.allTextContents();
console.log(pricesT);
await expect(prices.first()).toHaveText('$7.99');
const priceValues = pricesT.map(price => Number(price.replace('$', '')));
console.log(priceValues);
});