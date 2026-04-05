import { th } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";

export class AlertFunctionality {
  private readonly page: Page;

  private readonly alertBox:Locator
  private readonly AlertBtn:Locator
  private readonly ConfirmBtn:Locator
  

  constructor(page: Page) {
    this.page = page;
    this.alertBox= page.getByPlaceholder('Enter Your Name')
    this.AlertBtn =page.locator('#alertbtn')
     this.ConfirmBtn =page.locator('#confirmbtn')
  }

  async AlertValidation(){


   await this.alertBox.fill("Sai");

    // Listen for the alert
    let alertMessage = '';
    this.page.once('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept(); // click OK
    });

    // Click the button to trigger the alert
    await this.AlertBtn.click();

    return alertMessage;

  }

   async AlertConfirmValidation(){


   await this.alertBox.fill("Sai");

    // Listen for the alert
    let alertMessage = '';
    this.page.once('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept(); // click OK
    });

    // Click the button to trigger the alert
    await this.ConfirmBtn.click();

    return alertMessage;

  }



}