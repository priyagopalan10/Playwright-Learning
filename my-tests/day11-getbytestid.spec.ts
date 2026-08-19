import { test, expect } from '@playwright/test';

test('Verify product count using data-test attribute', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    const product = page.locator('[data-test="inventory-item"]');
    await expect(product).toHaveCount(6);
const backpack = product.filter({ hasText: 'Sauce Labs Backpack' });

await expect(backpack).toHaveCount(1);

await backpack.getByRole('button', { name: 'Add to cart' }).click();
});