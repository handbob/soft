import { test, expect } from '@playwright/test'

test('has title with blue color, specified text, and correct data type', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.locator('h1')).toHaveCSS('color', 'rgb(0, 0, 255)');
    await expect(page.locator('h1')).toHaveText('Hello from React.js!');
    expect(typeof await page.locator('h1').textContent()).toBe('string');
});
