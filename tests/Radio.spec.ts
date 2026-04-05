import { test, expect } from '../utils/hooks';
import { radioFunctionality } from '../pages/Radio';

test('Radio Btn1 Functionality Check @sanity', async ({ page }) => {
  const radioFun = new radioFunctionality(page);

  await radioFun.selectRadio('radio1');
  expect(await radioFun.isRadioChecked('radio1')).toBeTruthy();
});

test('Radio Btn2 Functionality Check', async ({ page }) => {
  const radioFun = new radioFunctionality(page);

  await radioFun.selectRadio('radio2');
  expect(await radioFun.isRadioChecked('radio2')).toBeTruthy();
});

test('Radio Btn3 Functionality Check', async ({ page }) => {
  const radioFun = new radioFunctionality(page);

  await radioFun.selectRadio('radio3');
  expect(await radioFun.isRadioChecked('radio3')).toBeTruthy();
});