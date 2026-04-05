import { th } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";

export class CheckboxFunctionality {
  private readonly page: Page;
  
  

  constructor(page: Page) {
    this.page = page;
   
    
  }
async selectValueFromCheckbox(checkboxId: string) 

{
    
  await this.page.locator(`#${checkboxId}`).check();


}

}