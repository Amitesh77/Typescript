import { browser, by, element, ElementFinder,ElementArrayFinder } from "protractor";

describe('Calculator Test' ,()=> {


it('It should navigate to calculator Home page' ,()=> {

    browser.get('https://juliemr.github.io/protractor-demo/')

    element(by.model("first")).sendKeys("6");
    element(by.model("second")).sendKeys("6");
    element(by.id("gobutton")).click();

    element(by.model("first")).sendKeys("9");
    element(by.model("second")).sendKeys("90");
    element(by.id("gobutton")).click();

    element(by.model("first")).sendKeys("23");
    element(by.model("second")).sendKeys("45");
    element(by.id("gobutton")).click();



    element.all(by.repeater('result in memory')).each(function(item) 
    {
        item.element(by.css('td:nth-child(3')).getText().then((text)=> {
            console.log(text)
        })
    });

    
    

   

        

    



})

})