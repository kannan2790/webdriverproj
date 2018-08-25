var Page = require('./Page')

var mainPage = Object.create(Page, {
    img: { get: function () { return browser.element("//img[contains(@title,'El Guntors')]"); } },
    url: {get: function () { return browser.getUrl(); }},
    status:{get: function(){ return browser.element("//div[contains(@id,'AtChatStatus')]//span[contains(@class,'-is-active')]");
        }

    },
    apprequest:{get:function(){return browser.element('#AtAppointmentLink')}},

    open: { value: function() {
        Page.open.call(this, 'reggie');
    } },
    getcss:{value: function(){
        return (this.status.getCssProperty('color'));
    }},
    getupdates:{get:function(){return browser.element("//a[contains(@class,'social-list')][contains(text(),'Get my updates')]");}}
    // get:{value: function(number){
    //     var ar = [];
    //     for(i =1;i<=number;i++)        {
    //         console.log(i);
    //         var xpath =  `(//div[contains(@id,"AtChatStatus")]//span)[${i}]`
    //         console.log(xpath);
    //         var as = (browser.element(xpath)).getText();
    //         ar.push(as);
    // }
    // console.log(ar);    
    // return ar;}
    // }
});

module.exports = mainPage;


