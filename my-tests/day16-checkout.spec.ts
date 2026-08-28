import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Day 16 - Checkout test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login();

    const productsPage = new ProductsPage(page);
    await productsPage.addBikeLight();
    await productsPage.goToCart();
   

    const cartPage = new CartPage(page);
   await cartPage.verifyBikeLightInCart();
    await cartPage.goToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.completeCustomerDetails();
    await checkoutPage.verifyCheckoutPage();

});