import { test, expect } from '../utils/hooks';
import { AlertFunctionality  } from '../pages/Alerts';


let allertFunctionality: AlertFunctionality;


test('Allert Button Functionality Check', async ({ page, context }) => {
  allertFunctionality = new AlertFunctionality(page);

  const allertText = await allertFunctionality.AlertValidation();

  expect(allertText).toBe("Hello Sai, share this practice page and share your knowledge")
 
});
test('Allert Confirm Button Functionality Check', async ({ page, context }) => {
  allertFunctionality = new AlertFunctionality(page);

  const allertConfirmText = await allertFunctionality.AlertConfirmValidation();

  expect(allertConfirmText).toBe("Hello Sai, Are you sure you want to confirm?")
 
});
