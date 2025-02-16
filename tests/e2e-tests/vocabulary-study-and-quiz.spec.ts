import { expect, test } from '@playwright/test';

test.describe('Vocabulary Table', () => {
  // AC1 - Column headers are English and Japanese
  // GIVEN a user is on the Japanese Vocabulary page
  // WHEN user selects the animals topic
  // THEN there is a table with two headers named "English" and "Japanese",
  // and the English header is on the left.
  
  test('AC1 - Column headers are English and Japanese with English on the left', async ({ page }) => {
    await page.goto('http://localhost:5173/japanese/vocabulary?s=ani-T0TFT');
      
    // Check if the table exists
    const table = page.locator('table');
    await expect(table).toBeVisible();
  
    // Locate all table headers (<th>)
    const headers = table.locator('thead tr th');
    await expect(headers).toHaveCount(2); // Ensure there are only two headers
  
    // Verify the text of the headers and their order
    await expect(headers.nth(0)).toHaveText('English'); // English is on the left
    await expect(headers.nth(1)).toHaveText('Japanese'); // Japanese is on the right
  });
});
