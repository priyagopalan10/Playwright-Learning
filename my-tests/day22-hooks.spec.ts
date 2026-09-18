import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

});

test('Day 22 - Verify Products Page', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    await productsPage.verifyProductsPage();

});

test('Day 22 - Add Bike Light', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    await productsPage.addBikeLight();
    await productsPage.verifyCartCount(1);

});