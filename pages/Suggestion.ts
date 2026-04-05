import { Locator, Page } from "@playwright/test";

export class SuggestionFunctionality {
  private readonly page: Page;
  private readonly suggestionBox: Locator;
  private readonly suggestionList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.suggestionBox = page.locator("#autocomplete");
    this.suggestionList = page.locator("li.ui-menu-item");
  }

  async validateSuggestion(targetOption: string) {
    await this.suggestionBox.click();
    await this.suggestionBox.fill("sa");

    // Wait for suggestions to appear
    await this.suggestionList.first().waitFor();

    // ✅ Click the matching option
    await this.suggestionList.filter({ hasText: targetOption }).click();

    let Alloptions:string[] = await this.suggestionList.allInnerTexts()

    console.log(Alloptions)
    console.log("length is",Alloptions.length)
    console.log("count is",await this.suggestionList.count())

  }
}