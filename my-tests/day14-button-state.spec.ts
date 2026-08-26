import { test, expect } from '@playwright/test';

async function login(page) {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
}

test('Day 14 - Verify button state change', async ({ page }) => {

    await login(page);

    const bikeLight = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' });

    const addToCart = bikeLight.getByRole('button', {
        name: 'Add to cart'
    });

    await addToCart.click();

    const removeButton = bikeLight.getByRole('button', {
        name: 'Remove'
    });

    await expect(removeButton).toHaveText('Remove');
});


test('Day 14 - Reusable login', async ({ page }) => {

    await login(page);

});