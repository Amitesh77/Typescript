
import { browser, by, element, ElementFinder,ElementArrayFinder } from "protractor";

 export class Dropdown{



selectDropDown(day:string)
{
    element.all(by.xpath("//select[@id='day']/option")).each((day1)=>{

        day1.getText().then((text)=>{

           if(text==day)
           {
               day1.click()
           }
        })
    })

}

 


         
    

}

