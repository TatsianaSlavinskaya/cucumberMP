var provider = require('../page_objects/pages/PageFactory');
var homePage = require('../page_objects/pages/HomePage');
var assert = require('assert');

var CommonSteps = function() {

  this.Given(/^I am on "([^"]*)" page$/, function(pageName) {
    return provider.getPageObjects(pageName).visit();
  });

  this.Then(/^Count of articles as "([^"]*)"$/, function(count) {
    return homePage.getCountOfArticles()
      .then(val => {
        assert.equal(val, 23);
      });
  });

  this.Then(/^Home button is present on page$/, function() {
    return homePage.homeButton.isDisplayed()
      .then(bool => {
        assert.equal(bool, true);
      });
  });

  this.Then(/^Settings span is present on page$/, function() {
    return homePage.settingsSpan.isDisplayed()
      .then(bool => {
        assert.equal(bool, true);
      });
  });

};
module.exports = CommonSteps;