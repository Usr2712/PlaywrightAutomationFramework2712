import { test, expect } from '../utils/hooks';
import { NewWindowAndTabFunctionality  } from '../pages/newWindowAndTab';


let newWindowAndTab: NewWindowAndTabFunctionality;


test('NewWindow Functionality Check', async ({ page, context }) => {
  newWindowAndTab = new NewWindowAndTabFunctionality(page, context);

  const headingText = await newWindowAndTab.NewWindowValidation();

  expect(headingText).toBe('Foundations of Modern Higher Education');


});

test('NewTab Functionality Check', async ({ page, context }) => {


  const headingText = await newWindowAndTab.NewTabValidation();

  expect(headingText).toBe('Foundations of Modern Higher Education');


});
