import {test,expect} from "../utils/hooks"
import {SuggestionFunctionality} from "../pages/Suggestion"


test("SuggestionList Validation", async ({ page }) => {
    
  const suggestion = new SuggestionFunctionality(page);

  

  await suggestion.validateSuggestion("Saint Kitts and Nevis");

  expect (page.locator("#autocomplete")).toHaveValue("Saint Kitts and Nevis")

 
});
