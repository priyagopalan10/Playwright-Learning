# Playwright Cheat Sheet

## Core Files

| File | Purpose |
|------|---------|
| package.json | Stores project information and dependencies. |
| playwright.config.ts | Controls how Playwright runs tests (browsers, test folder, reporter, etc.). |
| my-tests | Contains all test files. |
| node_modules | Stores installed packages. |

---

## Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('Test Name', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await expect(page).toHaveTitle(/Amazon/);
});
```

---

## Keywords

| Keyword | Meaning |
|---------|---------|
| test | Defines a test case. |
| async | Allows the function to use await. |
| await | Waits for an action to complete. |
| page | Represents the browser tab. |
| goto() | Opens a URL. |
| expect() | Starts a verification. |
| toHaveTitle() | Verifies the page title. |

---

## Commands

```bash
npx playwright test
```Runs all Playwright tests.

```bash
npx playwright show-report
Opens the HTML report.

---

## Formula

Total Test Executions = Number of Test Cases × Number of Browsers

Example:
3 Test Cases × 3 Browsers = 9 Executions
```
Day 10 - Learning Git and GitHub fundamentals