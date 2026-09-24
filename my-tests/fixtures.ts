import { test as base } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';
type Fixtures = {
    productsPage: ProductsPage;
    loginPage: LoginPage;
};
export const test = base.extend<Fixtures>({
  productsPage: async ({ page }, use) => {
      const productsPage = new ProductsPage(page);

    await use(productsPage);
},
loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    await use(loginPage);

}
});

