Feature: Routes of Bus

  Scenario: I as user want to look for the route of bus "D20"
    Given I press "Stations"
    Then I press "Routes"
    Then I wait for 5 seconds
    Then I press view with id "search_button"
    Then I enter text "D20" into field with id "search_src_text"
    Then I press the enter button
    Then I press view with id "txtBusDescription"
    And I wait for 5 seconds

  Scenario: I as user want to look for the route of bus "D20" and check as favotite
    Given I press "Stations"
    Then I press "Routes"
    Then I wait for 5 seconds
    Then I press view with id "search_button"
    Then I enter text "D20" into field with id "search_src_text"
    Then I press the enter button
    Then I wait for 2 seconds
    Then I press view with id "imgFavorite"
    And I wait for 5 seconds