import {test, expect} from '@playwright/test';
test('Verify Amazon homepage', async ({ page }) => {

});
await page.goto('https://www.amazon.in');
await expect(page).toHaveTitle(/Amazon/);
