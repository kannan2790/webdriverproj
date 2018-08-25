var Page = require('./Page')

var updatepage = Object.create(Page, {
    email:{get:function(){return browser.element('#newsletterInscEmail');}},
    name:{get:function(){return browser.element('#inscName')}},
    submitbutton:{get:function(){return browser.element("//button[@type='submit']");}},
    closebutton:{get:function(){return browser.element("//div[@id='inscriptionModal']//button[contains(@class,'close-button')]")}}

})

module.exports = updatepage;