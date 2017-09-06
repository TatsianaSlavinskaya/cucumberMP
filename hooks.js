module.exports = function() {

  this.Before(function() {
    return browser.get('http://allrecipes.com/');
  });

  this.After(function() {
    return browser.close();
  });

};
