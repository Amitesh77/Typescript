import { browser, by, element, ElementFinder,ElementArrayFinder, protractor } from "protractor";
import { Dropdown } from "./Dropdown";

//const HttpClient = require("protractor-http-client").HttpClient

var request=require('request')
var assert=require('assert')

describe('Broken links scenario',()=>{

let list=[];

    it('Validating broken links from facebook',()=>{

        browser.ignoreSynchronization=true
        browser.get("https://facebook.com");

        element.all(by.tagName("a")).each((url)=> {

            let url1=url.getAttribute("href").then((actualurl)=>{

                
            if(actualurl)
            {
                request(actualurl,(error,response,body)=>{

                    assert.equal(response.statusCode,200,"Status is not Ok")
                    console.log(actualurl +response.statusCode)
                })
            }
                
                
            })

        });

        

    })


    fdescribe('Dropdown test' ,()=>{

        browser.ignoreSynchronization=true

        it('Selecting Dropdown',()=>{


            browser.get("https://www.facebook.com");

                       
            let cd=new Dropdown()

            cd.selectDropDown("14")
               

              
            
            })


        })


    })






})