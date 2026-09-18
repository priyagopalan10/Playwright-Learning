import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Day 21 - Navigation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login();

    await page.waitForURL(/inventory.html/);

    const productsPage = new ProductsPage(page);

    await productsPage.verifyProductsPage();
});