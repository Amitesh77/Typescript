import {browser,element,by} from 'protractor'

describe('Protractor Demo', () => {
	it('Should navigate to Demo Page', () => {
		browser.get('https://juliemr.github.io/protractor-demo/');

		element(by.model("first")).sendKeys("6");
		element(by.model("second")).sendKeys("6");
		element(by.id("gobutton")).click();

		element(by.model("first")).sendKeys("9");
		element(by.model("second")).sendKeys("90");
		element(by.id("gobutton")).click();

		element(by.model("first")).sendKeys("23");
		element(by.model("second")).sendKeys("45");
		element(by.id("gobutton")).click();
		//browser.sleep(5000);
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){

console.log(text);

		})

	
		});
	});
