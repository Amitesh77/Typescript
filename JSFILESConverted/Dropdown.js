"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const protractor_1 = require("protractor");
class Dropdown {
    selectDropDown(day) {
        protractor_1.element.all(protractor_1.by.xpath("//select[@id='day']/option")).each((day1) => {
            day1.getText().then((text) => {
                if (text == day) {
                    day1.click();
                }
            });
        });
    }
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Ecm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBb0Y7QUFFbkYsTUFBYSxRQUFRO0lBSXRCLGNBQWMsQ0FBQyxHQUFVO1FBRXJCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1lBRTdELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtnQkFFekIsSUFBRyxJQUFJLElBQUUsR0FBRyxFQUNaO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtpQkFDZjtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0NBUUE7QUF6QkEsNEJBeUJBIn0=