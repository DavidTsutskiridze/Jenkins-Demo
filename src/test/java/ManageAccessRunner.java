import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/ManageAccessRunner",
                "rerun:target/Return_Failed/ManageAccessRunner.txt"},// rerun plugin generates.txt file
        features = "src/main/resources/features/manageAccess.feature:4",
        //features = "@target/Return_Failed/ManageAccessRunner.txt", // running failed txt file
        glue = {"steps"},
        stepNotifications = true,
        //tags="@regression",
        //   tags="@regression and @shakeout",
        dryRun=false
)
public class ManageAccessRunner {
}