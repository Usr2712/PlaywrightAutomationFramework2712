import { test, expect } from '../utils/hooks';
import { MouseHoverFunctionality  } from '../pages/MouseHover';


let mouseHoverFunctionality: MouseHoverFunctionality;


test('WebTable Functionality Check', async ({ page, context }) => {
  mouseHoverFunctionality = new MouseHoverFunctionality(page);

  await mouseHoverFunctionality.MouseHover()

 
});