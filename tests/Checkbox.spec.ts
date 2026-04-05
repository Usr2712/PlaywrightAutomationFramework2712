import { test, expect } from '../utils/hooks';
import { CheckboxFunctionality  } from '../pages/Checkbox';


test('DropDown Functionality Check', async ({ page }) => {
  const CheckBoxFun = new CheckboxFunctionality(page);

  await CheckBoxFun.selectValueFromCheckbox('checkBoxOption2');

  
});
