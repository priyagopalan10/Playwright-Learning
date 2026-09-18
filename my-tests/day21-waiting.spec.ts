import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Day 21 - Waiting and Synchronization', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    const productsPage = new ProductsPage(page);

    await productsPage.verifyProductsPage();
    await productsPage.addBikeLight();
    await productsPage.verifyCartCount(1);
    await productsPage.goToCart();

    const cartPage = new CartPage(page);
    await cartPage.verifyBikeLightInCart();

});