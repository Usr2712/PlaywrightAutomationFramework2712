import { test, expect } from '../utils/hooks';
import { DropdownFunctionality } from '../pages/Dropdown';


test('DropDown Functionality Check', async ({ page }) => {
  const DropFun = new DropdownFunctionality(page);

  await DropFun.SelectValueFromDropdown('option1');

  await expect(page.locator('#dropdown-class-example')).toHaveValue('option1');
  
});
