import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('Day 15 - POM Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
await loginPage.login();

});