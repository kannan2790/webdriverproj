var mainPage = require('../PageObjects/mainPage.page');
var apppage = require('../PageObjects/apppage.page');
var updatepage = require('../PageObjects/updatepage.page');

describe('As a customer, I can access Storefront', function() {
    it('My storefront page loads without errors', function() {
        mainPage.open();
        mainPage.img.waitForVisible(4000);
        expect(mainPage.url).to.have.string('lol56eff3d6ed8b9');
        assert(mainPage.img.isVisible()); //img loads the last
    });
});

describe('As a customer, I see the “LIVE CHAT” status as either “Available” or “Unavailable”', function() {
    var text;
    it('Status should be either "Available" or "Unavailable"', function() {
        mainPage.open();
        mainPage.img.waitForVisible(4000);
        text = (mainPage.status).getText();
        expect(text).to.be.oneOf(["Available", "Unavailable"]);
    });
    it('Status should be "green" if available and red if unavailable', function() {
        var color = mainPage.getcss();
        switch (text) {
            case "Available":
                expect(color).to.have.property('value', 'rgba(70,166,41,1)'); //used direct values instead of doing rgb2hex
                break;
            case "Unavailable":
                expect(color).to.have.property('value', 'rgba(238,12,12,1)');
                break;
        }
    });
});

describe('As a customer, I can submit an appointment request.', function() {
    it('create an appointment', function() {
        mainPage.open();
        mainPage.img.waitForVisible(15000);
        mainPage.apprequest.click();
        apppage.appframe.waitForVisible(6000);
        browser.waitForExist("//div[@id='appointmentModal']");
        var my_frame = $('iframe[id="bookAnAppointment"]').value;
        console.log(browser.windowHandles());
        console.log(browser.frame(my_frame));
        apppage.phoneservice.isExisting();
        apppage.selectradio('phone').click();
        apppage.dateselect.click(); 
        apppage.timeselect('10:00 AM');
        apppage.name.waitForVisible(2000);
        apppage.name.click().keys('Name');
        apppage.email.click().keys('abc@def.com');
        apppage.phone.click().keys('5146214047');
        apppage.textarea.click().keys('this is comment');
        apppage.autoSubscribe.click();
        apppage.submitbutton.click();
        apppage.validationmodal.waitForVisible(3000);
        var title = apppage.validationtitle.getText();
        assert.equal(title, 'Thank you for your request!');
        // expect(title).to.have.string('Thank you for your request!');
        var text = apppage.validationtext.getText();
        assert.equal(text, 'You should receive a response shortly.');
        // expect(text).to.have.string('You should receive a response shortly.');
    });
});

describe('As a customer, I can sign up for regular updates.', function() {
    it('sign up for updates', function() {
        mainPage.open();
        mainPage.img.waitForVisible(15000);
        mainPage.getupdates.click();
        browser.waitForExist('#inscriptionModal');
        var my_frame = $('iframe[id="inscription"]').value;
        console.log(browser.windowHandles());
        console.log(browser.frame(my_frame));
        updatepage.name.click().keys('Name');
        updatepage.email.click().keys('abc@def.com');
        updatepage.submitbutton.click();
        apppage.validationmodal.waitForVisible(3000);
        expect(apppage.validationmodal.isVisible()).to.be.true;
        var title = apppage.validationtitle.getText();
        assert.equal(title, 'Thank you!');
        var text = apppage.validationtext.getText();
        assert.equal(text, 'You are now signed up');
        expect(apppage.validationmodal.isVisible()).to.be.true;
        browser.frame();
        updatepage.closebutton.click();
        expect(apppage.validationmodal.isVisible()).to.be.false;
    });
});