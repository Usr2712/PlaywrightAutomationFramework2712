import { test, expect } from "@playwright/test";




test('Validation productTable component', async ({ page }) => {

   
   
    await expect(page).toHaveURL(/battery-management-ics/);
    await expect(page.getByRole('heading', { name: 'Battery management ICs' })).toBeVisible()

})