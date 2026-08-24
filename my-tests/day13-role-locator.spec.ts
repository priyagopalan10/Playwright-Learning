import { test, expect } from '@playwright/test';

test('Day 13 - Verify Backpack Add to Cart button', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    const backpack = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    const addToCart = backpack.getByRole('button', {
        name: 'Add to cart',
        exact: true
    });

    await expect(addToCart).toBeVisible();
});


test('Day 13 - Verify and click Bike Light Add to Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    const bikelight = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' });

    const addToCart = bikelight.getByRole('button', {
        name: 'Add to cart',
        exact: true
    });

    await expect(addToCart).toBeVisible();

    await addToCart.click();
});


test('Day 13 - Login using labels', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');

    await page.getByRole('button', {
        name: 'Login',
        exact: true
    }).click();
});