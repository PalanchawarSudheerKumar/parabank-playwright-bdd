Feature: Parabank Signup and Login

  Scenario: User creates a new account and logs in successfully
    Given the user navigates to the Parabank homepage
    When the user registers with valid details
    And the user logs in with the registered credentials
    Then the user should see their account balance displayed
