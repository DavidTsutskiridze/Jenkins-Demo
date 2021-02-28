import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/LoginRunner",
                "rerun:target/Return_Failed/InterviewSection.txt"},// generates html report in target folder
        features = "src/main/resources/features/interviewSection.feature:10",//28 is the line number
        glue = {"steps"}    // path to the step definition
       // ,dryRun = false   // generates step definitions
        , stepNotifications = true  // displays each steps in the console

)
public class InterviewSectionRunner {
}