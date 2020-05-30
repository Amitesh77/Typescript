"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Dropdown_1 = require("./Dropdown");
//const HttpClient = require("protractor-http-client").HttpClient
var request = require('request');
var assert = require('assert');
describe('Broken links scenario', () => {
    let list = [];
    it('Validating broken links from facebook', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("https://facebook.com");
        protractor_1.element.all(protractor_1.by.tagName("a")).each((url) => {
            let url1 = url.getAttribute("href").then((actualurl) => {
                if (actualurl) {
                    request(actualurl, (error, response, body) => {
                        assert.equal(response.statusCode, 200, "Status is not Ok");
                        console.log(actualurl + response.statusCode);
                    });
                }
            });
        });
    });
    fdescribe('Dropdown test', () => {
        protractor_1.browser.ignoreSynchronization = true;
        it('Selecting Dropdown', () => {
            protractor_1.browser.get("https://www.facebook.com");
            let cd = new Dropdown_1.Dropdown();
            cd.selectDropDown("14");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJva2VuTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Ccm9rZW5MaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRztBQUNoRyx5Q0FBc0M7QUFFdEMsaUVBQWlFO0FBRWpFLElBQUksT0FBTyxHQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM5QixJQUFJLE1BQU0sR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFFNUIsUUFBUSxDQUFDLHVCQUF1QixFQUFDLEdBQUUsRUFBRTtJQUVyQyxJQUFJLElBQUksR0FBQyxFQUFFLENBQUM7SUFFUixFQUFFLENBQUMsdUNBQXVDLEVBQUMsR0FBRSxFQUFFO1FBRTNDLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFBO1FBQ2xDLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1lBRXJDLElBQUksSUFBSSxHQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFDLEVBQUU7Z0JBR3BELElBQUcsU0FBUyxFQUNaO29CQUNJLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFO3dCQUVyQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLGtCQUFrQixDQUFDLENBQUE7d0JBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFDL0MsQ0FBQyxDQUFDLENBQUE7aUJBQ0w7WUFHRCxDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFDO0lBSVAsQ0FBQyxDQUFDLENBQUE7SUFHRixTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUUsRUFBRTtRQUUzQixvQkFBTyxDQUFDLHFCQUFxQixHQUFDLElBQUksQ0FBQTtRQUVsQyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsR0FBRSxFQUFFO1lBR3hCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFHeEMsSUFBSSxFQUFFLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUE7WUFFckIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUt2QixDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQyxDQUFDLENBQUEifQ==