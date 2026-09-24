import { test } from './fixtures';

test('Day 24 - Fixture Reuse', async ({ loginPage, productsPage }) => {

    await loginPage.login();
    await productsPage.verifyProductsPage();
    await productsPage.addBikeLight();
    await productsPage.verifyCartCount(1);

});