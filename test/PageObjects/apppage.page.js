var Page = require('./Page')

var apppage = Object.create(Page, {
    autoSubscribe:{get:function(){return browser.element('#autoSubscribe');}},
    appframe: { get: function () { return browser.element('#bookAnAppointment'); } },
    dateselect:{get:function(){
        var today = new Date();
        var dd = today.getDate()+7;
        var xpath =`//A[contains(@class,'ui-state-default')][text()='${dd}']`;
        browser.element("//input[@name='choosenDatePlaceholder']").click();
        browser.element(xpath).waitForVisible(3000);
        return browser.element(xpath)
    }},
    email:{get:function(){return browser.element('#email');}},
    name:{get:function(){return browser.element('#name');}},
    timeselect:{value:function(time){
        var selectbox = $('//select[@name="choosenTime"]');
        selectbox.selectByValue(`${time}`);
    }},
    phone:{get:function(){return browser.element('#phone');}},
    phoneservice: {get:function(){
        return browser.element('#phoneService');
    }},
    textarea:{get:function(){return browser.element('#extraInfo');}},
    // phonebutton: {get:function(){
    //     return browser.element("//li[@class='global-services__list__item'])[]");
    // }},
    // storebutton: {get:function(){
    //     return browser.element("//li[@class='global-services__list__item'])[1]");
    // }},
    selectradio:{value: function(text){
        switch (text) {
        case 'chat':
            xpath =`(//li[@class='global-services__list__item'])[1]`;
            break;
        case 'phone':
            var xpath =`(//li[@class='global-services__list__item'])[2]`;
            break;
        case 'store':
            var xpath =`(//li[@class='global-services__list__item'])[3]`;
            break;

    }
        console.log(xpath);
        return browser.element(xpath);
    }},
    submitbutton:{get:function(){return browser.element("//button[@type='submit']");}},
    validationmodal:{get:function(){return browser.element("//div[contains(@class,'validation__message')]");}},
    validationtitle:{get:function(){return browser.element("//span[contains(@class,'validation__title')]");}},
    validationtext:{get:function(){return browser.element("//span[contains(@class,'validation__text')]");}}
});

module.exports = apppage;
