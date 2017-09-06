var Helper = require('../support/Helper');
var assert = require('assert');
var BasicPage = require('../page_objects/pages/BasicPage');

var SearchSteps = function() {

  this.When(/^I perfom a serach of "([^"]*)"$/, function(ingridient) {
    return BasicPage.header.search(ingridient);
  });

  this.Then(/^Results as "([^"]*)"$/, function(ingridient) {
    return BasicPage.results.checkResultSearch()
      .then(search => {
        var str = '2004 recipe results for "' + ingridient + '"';
        assert.equal(search, str);
      });
  });

  this.When(/^I edit request by parameters to "([^"]*)" without "([^"]*)" without "([^"]*)"$/, function(par1, par2, par3) {
    return Helper.waitAndClick(BasicPage.results.editSearchButton).then(() => {
      BasicPage.header.searchWithParameters(par1, par2, par3);
    });
  });

};

module.exports = SearchSteps;