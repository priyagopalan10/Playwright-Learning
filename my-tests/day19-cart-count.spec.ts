import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Day 19 - Assertions Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();
    

    const productsPage = new ProductsPage(page);
    await productsPage.verifyCartEmpty();

     await productsPage.addProduct('Sauce Labs Bike Light');
     await productsPage.addProduct('Sauce Labs Backpack');
     await productsPage.verifyCartNotEmpty();
  await productsPage.verifyCartCount(2);
});