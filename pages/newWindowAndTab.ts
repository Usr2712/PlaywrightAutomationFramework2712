import { Locator,BrowserContext, Page } from "@playwright/test";

export class NewWindowAndTabFunctionality {
  private readonly page: Page;
  private readonly context: BrowserContext;
  private readonly NewWindowBtn: Locator;
private readonly NewTabBtn: Locator;
  

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.NewWindowBtn = page.getByRole('button', { name: 'Open Window' });
     this.NewTabBtn =  page.getByRole('link', { name: /Open Tab/i });

  }

  async NewWindowValidation(){

 
  const [newPage] = await Promise.all([
   this.context.waitForEvent("page"),      
   await this.NewWindowBtn.click()  

  
])

 const HeadingInNewPage = newPage.getByRole('heading',{name:'Foundations of Modern Higher Education'});
    
const Heading = await HeadingInNewPage.textContent();
console.log(Heading)
return Heading

}

 async NewTabValidation(){

 
  const [newPage] = await Promise.all([
   this.context.waitForEvent("page"),      
   await this.NewTabBtn.click()
  
  
]);
 const HeadingInNewPage = newPage.getByRole('heading',{name:'Foundations of Modern Higher Education'});
    
const Heading = await HeadingInNewPage.textContent();
console.log(Heading)
return Heading

}




}