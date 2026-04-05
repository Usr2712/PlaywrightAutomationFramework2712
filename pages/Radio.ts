import { Locator, Page } from "@playwright/test";

export class radioFunctionality {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Select a radio button dynamically by its value
  async selectRadio(value: string) {
    await this.page.locator(`input[name="radioButton"][value="${value}"]`).check();
  }

  // Verify if a radio button is checked
  async isRadioChecked(value: string): Promise<boolean> {
    return this.page.locator(`input[name="radioButton"][value="${value}"]`).isChecked();
  }
}