Feature: Check global search

@desktop
  Scenario: Search by key ingridients
    Given I am on "home" page
    When I perfom a serach of "fish" 
    Then Results as "fish"
    When I edit request by parameters to "chicken" without "lime" without "honey"
    Then Results as "chicken"

