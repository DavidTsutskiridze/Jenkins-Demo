Feature: Interview Section

  Background:
    Given I navigate to Interview Prep
    Then I enter "admin@yahoo.com" in the Email input box
    And I enter "adminuser123" in the Password input box
    And I click "Login" button
#    When I open Interview Section page

  @test1
  Scenario: Validate adding a new Do statement will display in Do section
#    When I enter "Talk clear" in "Do" input field
#    And I click "Enter" button
#    Then I validate "Talk clear" is displayed in "Do" section

  @test2
  Scenario: Test Do functionality ( add button)
    And  I click "add" button
    Then I enter "some text" in "Do" input field
    Then I validate "some text" is displayed in "Do" section

  @test3
  Scenario: Test Do functionality (edit button)
    And  I click "edit" button
    Then I enter "something to text" in "Do" input field
    Then I validate "something to text" is displayed in "Do" section

  @test4
  Scenario: Test Do functionality (delete button)
    And  I click "delete" button
    Then I validate "something to text" is no more displayed in "Do" section






#  CLASS TASK:
#  Test Do functionality.
#  User should be able to add statements
#  User should be able to edit or delete own statements only.