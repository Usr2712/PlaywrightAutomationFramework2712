import { test, expect } from '../utils/hooks';
import { WebTableFunctionality  } from '../pages/WebTable';


let webTableFunctionality: WebTableFunctionality;


test('WebTable Functionality Check', async ({ page, context }) => {
  webTableFunctionality = new WebTableFunctionality(page);

  await webTableFunctionality.ReadDataFromTable()

 
});