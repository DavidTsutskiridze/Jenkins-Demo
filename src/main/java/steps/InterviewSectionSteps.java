package steps;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class InterviewSectionSteps {
    @When("I enter {string} in {string} input field")
    public void iEnterInInputField(String msg, String fieldName) {
        System.out.println("Enter " + msg + " in " + fieldName + " input field");
    }

    @Then("I validate {string} is displayed in {string} section")
    public void iValidateIsDisplayedInSection(String msg, String sectionName) {
        System.out.println("I validate " + msg + " is displayed in " + sectionName + " section");
        /**
         * switch(sectionName){
         * case "Do":
         *  driver.findElementById("inputArea1").sendKeys(msg);
         *  break;
         *  case "Dont":
         *  driver.findElementById("inputArea2").sendKeys(msg);
         */
    }

    @Then("I validate {string} is no more displayed in {string} section")
    public void iValidateIsNoMoreDisplayedInSection(String msg, String arg1) {
    }

    @Then("I enter {string} in the Email input box")
    public void iEnterInTheEmailInputBox(String arg0) {

    }

    @And("I enter {string} in the Password input box")
    public void iEnterInThePasswordInputBox(String arg0) {
    }
}