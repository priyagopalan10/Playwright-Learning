import { test } from './fixtures';
import { LoginPage } from '../pages/LoginPage';
test('Day 23 - Custom Fixture', async ({ page, productsPage }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    await productsPage.verifyProductsPage();
    await productsPage.addBikeLight();
    await productsPage.verifyCartCount(1);

});