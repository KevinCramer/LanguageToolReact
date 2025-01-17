import { expect, test } from '@playwright/test';

test.describe('Table', () => {
  test('should have a table with headers "Japanese" and "English"', async ({ page }) => {
    await page.goto('http://localhost:5173/japanese/vocabulary?s=ani-T0TFT');
      
    // Check if the table exists
    const table = page.locator('table');
    await expect(table).toBeVisible();
  
    // Locate the header row and check for two specific <th> elements
    const headerRow = table.locator('thead tr');
    const japaneseHeader = headerRow.locator('th:has-text("Japanese")');
    const englishHeader = headerRow.locator('th:has-text("English")');
      
    // Verify both headers are present
    await expect(japaneseHeader).toBeVisible();
    await expect(englishHeader).toBeVisible();
    
  });
});