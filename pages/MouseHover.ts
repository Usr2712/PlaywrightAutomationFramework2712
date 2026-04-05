import { Locator, Page } from "@playwright/test";

export class MouseHoverFunctionality {
  private readonly page: Page;
   private readonly HoverBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HoverBtn = page.locator('#mousehover')
  }

  // Select a radio button dynamically by its value
  async MouseHover() {
    await this.HoverBtn.scrollIntoViewIfNeeded()
   await this.HoverBtn.hover()
  
  }

}