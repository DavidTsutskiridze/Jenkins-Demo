import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/LoginRunner",
                "rerun:target/Return_Failed/LoginRunner.txt"},// generates html report in target folder
        features = "src/main/resources/features/login.feature",
        glue = {"steps"}
       // , tags="@test4"
        ,stepNotifications = false
        //tags="@test1 or test2"
        //tags="@test1 and test2"

        //tags ="@regression and @shakeout"
)
public class LoginRunner {
}
// search files (java, feature, runner) double shift  (tap shift key twice)
//search word in file (cmd+F or ctrl+F)
//search word globally (cmd+shift+F or ctrl+shift+F)
//replace word in file (cmd+R or ctrl+R)
//replace word globally (cmd+shift+R or ctrl+shift+R)