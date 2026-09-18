import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Day 21 - Element State', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    const productsPage = new ProductsPage(page);
    await productsPage.verifyProductsPage();

    await productsPage.addBikeLight();
});