import {test, expect}from '@playwright/test';
test ('Verify Title and text', async ( {page}) => {
    await page.goto('https://playwright.dev');
    await expect(page). toHaveTitle(/Playwright/);
    await expect(page.getByText('Get Started')). toBeVisible();
});
