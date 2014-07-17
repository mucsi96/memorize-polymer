var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    Homepage = require('./homepage.po'),
    homepage = new Homepage();

chai.use(chaiAsPromised);

module.exports = function () {

    this.Given(/^that I have gone to the homepage$/, function (done) {
        homepage.get();
        done();
    });

    this.When(/^I click the drawer button$/, function (done) {
        homepage.drawerButton.click();
        done();
    });

    this.Then(/^drawer menu should be shown$/, function (done) {
        homepage.drawerMenu.isDisplayed().then(done);
    });
};