Feature: Login

  @testLogin
  Scenario: opening the page
    Given I navigate to Interview Prep
    Then I should see the "Login" page
    Then I enter "test@yahoo.com" in the "Enter Username" input box
    Then I enter "testUserPassword" in the "Enter Password" input box
    Then I click "Login" button
    Then I should see the "Home" page
    Then I click "Coding" button
    Then I click "Enter new question " button

  Scenario: opening the page
    Given I navigate to Interview Prep
    Then I should see the "Login" page
    Then I enter "admin@yahoo.com" in the "Enter Username" input box
    Then I enter "adminUserPassword" in the "Enter Password" input box
    Then I click "Login" button
    Then I should see the "Home" page
    Then I click "Coding" button
    Then I click "Enter new question " button

    #Create Scenario Outline which checks if the test user and admin user can successfully login
  Scenario Outline: Verify <user> user can login to HomePage
    Given I navigate to Interview Prep
    Then I should see the "Login" page
    Then I enter "<email>" in the "Enter Username" input box
    Then I enter "<password>" in the "Enter Password" input box
    Then I click "Login" button
    Then I should see the "Home" page
    Examples:
      | user  | email           | password     |
      | test  | test@yahoo.com  | testUserPassword  |
      | admin | admin@yahoo.com | adminUserPassword |


  Scenario: Validate the dashboards
    Given I navigate to Interview Prep
    Then I should see the "Login" page
    Then I enter "test@yahoo.com" in the "Enter Username" input box
    Then I enter "testuser123" in the "Enter Password" input box
    Then I click "Login" button
    Then I should see the "Home" page
    Then I verify the following dashboards are displayed:
      | All Topics  |
      | Coding      |
      | Soft skills |
      | Cucumber    |
      | Java        |
      | Jmeter      |
      | API         |
      | SQL         |
      | Github      |

  @test3 @test1 @regression @shakeout @miniregression
  Scenario: Login with invalid credentials - invalid email
    Given I navigate to Interview Prep
    Then I enter "test@gmail.com" in the Email input box
    And I enter "test123" in the Password input box
    And I click "Login" button
#    Then I should see a "Incorrect username/password" error message
#    Then I validate I am on "login" page
  @test4
  Scenario: Login with invalid credentials - invalid password
    Given I navigate to Interview Prep
    Then I enter "test@yahoo.com" in the Email input box
    And I enter "testinvalid" in the Password input box
    And I click "Login" button
#    Then I should see a "Incorrect username/password" error message
#    Then I validate I am on "login" page
  @test5
  Scenario: Login with invalid credentials - empty fields
    Given I navigate to Interview Prep
    And I click "Login" button
#    Then I should see a "Incorrect username/password" error message
#    Then I validate I am on "login" page
#    Then I validate I am on "login" page
