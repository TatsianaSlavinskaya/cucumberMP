Feature: Check home page

@desktop @mobile
  Scenario: Check home page by parameters
    Given I am on "home" page
    Then Count of articles as "22"
    Then Home button is present on page
    And Settings span is present on page 