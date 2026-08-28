import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
test('Day 16 - Remove Bike Light', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    const productsPage = new ProductsPage(page);
    await productsPage.addBikeLight();
    await productsPage.removeBikeLight();

});