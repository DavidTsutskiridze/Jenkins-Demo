import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/DashboardRunner",
                "rerun:target/Return_Failed/DashboardRunner.txt",
        "json:target/cucumber.json"},
        features = "src/main/resources/features/dashboard.feature:3",
        glue = {"steps"},
        stepNotifications = true
//        tags="@test1 or @test2"
        //   tags="@regression and @shakeout"
       // ,tags="@test1"
)
public class DashboardRunner {
}