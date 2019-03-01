Feature: Stations

  Scenario: I as user want to look for the station "Calle 57"
    Given I press "Stations"
    Then I wait for 5 seconds
    Then I press view with id "search_button"
    Then I enter text "Calle 57" into field with id "search_src_text"
    Then I press the enter button
    Then I press view with id "txtStationDescription"
    And I wait for 5 seconds

  Scenario: I as user want to look for the station "Calle 57" and check as favotite
    Given I press "Stations"
    Then I wait for 5 seconds
    Then I press view with id "search_button"
    Then I enter text "Calle 57" into field with id "search_src_text"
    Then I press the enter button
    Then I wait for 2 seconds
    Then I press view with id "imgFavorite"
    And I wait for 5 seconds