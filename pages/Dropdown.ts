import { th } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";

export class DropdownFunctionality {
  private readonly page: Page;
  private readonly Dropdown: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.Dropdown = page.locator('#dropdown-class-example')
    
  }

  async SelectValueFromDropdown(DropdownValue:string){

    await this.Dropdown.selectOption(DropdownValue)


  }

}