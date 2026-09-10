import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Day 18 - Reuse existing product method', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    const productsPage = new ProductsPage(page);

    await productsPage.addProduct('Sauce Labs Backpack');
    await productsPage.addProduct('Sauce Labs Bike Light');
await productsPage.verifyProductVisible('Sauce Labs Backpack');
await productsPage.verifyProductVisible('Sauce Labs Bike Light');
});