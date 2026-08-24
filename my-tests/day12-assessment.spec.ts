import { test, expect } from '@playwright/test';
test ('q1 username is visible', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username'). toBeVisible();
});
test('Q2 - Login and verify Products', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
await page.getByPlaceholder('Username'). fill('text');
await page.getByPlaceholder('Password'). fill('password');
await page.getByRole('button', {name : 'Login' }). click();
await expect(page.getByText('Products')). toBeVisible();
});
test('Q3 - Multiple Elements', async ({ page }) => { 
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('text');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Products')).toBeVisible();

    const product = page.locator('[data-test="inventory-item"]');   
    await expect(product).toHaveCount(6);
});
test('Q4 - Multiple Elements', async ({ page }) => { 
 await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('text');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
const item = page.locator('.inventory_item'). filter({ hasText : 'Sauce Labs Backpack'});
await expect(item). toHaveCount(1);
await item.getByRole('button', { name: 'Add to Cart'}). click();
});  
test('Q5 - Sort products by price', async ({ page }) => {
await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('text');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
await page.locator('[data-test="product-sort-container"]') .selectOption('lohi');  
await expect(page.locator('[data-test="product-sort-container"]') ).toHaveValue('lohi');  
});
test('Q6 - Verify first product', async ({ page }) => {

    await page.goto('https://www.saucedemo.com'); 
    await page.getByPlaceholder('Username').fill('text'); 
    await page.getByPlaceholder('Password').fill('password');  
await page.getByRole('button', { name: 'Login' }).click();  
const products = page.locator('.inventory_item'); 
await expect(products.first()). toHaveText('Sauce Labs Backpack');
});
test('Q7 - Verify the cart shows 1 item', async ({ page }) => {
await page.goto('https://www.saucedemo.com'); 
    await page.getByPlaceholder('Username').fill('text'); 
    await page.getByPlaceholder('Password').fill('password');  
await page.getByRole('button', { name: 'Login' }).click()
const products = page.locator('.inventory_item');  
const backpack = products.filter({ hasText: 'Sauce Labs Backpack' });  
await backpack.getByRole('button', { name: 'Add to cart' }).click();  
const cart = page.locator('[data-test="shopping-cart-link"]');  
await expect(cart).toHaveText('1');  

});