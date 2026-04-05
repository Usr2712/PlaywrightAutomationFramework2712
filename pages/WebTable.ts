import {Page, Locator} from "@playwright/test"
import * as XLSX from "xlsx";


export class WebTableFunctionality {
  private readonly page: Page

    private readonly table: Locator



  constructor(page: Page) {
    this.page = page;
  
    this.table = page.locator('//table[@id="product" and @name="courses" and contains(@class,"table-display")]')

  }

  async ReadDataFromTable(){
const tableData: string[][] = [];

await this.table.waitFor({ state: 'visible' });


    await this.table.scrollIntoViewIfNeeded()

    const rows =  this.table.locator('tbody tr')
    console.log(await rows.count())

    const columns=  this.table.locator('tbody tr th')
    console.log(await columns.count())

    
    for(let i =1;i<await rows.count();i++){


        const celldata = rows.nth(i).locator('td')
        
        const alldata = await celldata.allTextContents()

        tableData.push(alldata)

        console.log(tableData)

           const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");

    XLSX.writeFile(workbook, "WebTableData.xlsx");
    console.log("Data exported to WebTableData.xlsx");

    }

  }

}