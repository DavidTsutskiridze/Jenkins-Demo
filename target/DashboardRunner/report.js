$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/dashboard.feature");
formatter.feature({
  "name": "Dashboards",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding new dashboard",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
formatter.write("2021-02-25 23:00:48 Pass: Successfully navigated to the url");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-25 23:00:48 Pass: Login page is displayed");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"admin@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-25 23:00:56 Pass: admin@yahoo.com was entered in Enter Username input box successfully");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"adminuser123\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-25 23:01:02 Pass: adminuser123 was entered in Enter Password input box successfully");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-25 23:01:07 Pass: Login button was successfully clicked ");
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-25 23:01:12 Pass: Home page is displayed");
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the following dashboards are displayed:",
  "rows": [
    {
      "cells": [
        "All Topics"
      ]
    },
    {
      "cells": [
        "Coding"
      ]
    },
    {
      "cells": [
        "Soft skills"
      ]
    },
    {
      "cells": [
        "Cucumber"
      ]
    },
    {
      "cells": [
        "Java"
      ]
    },
    {
      "cells": [
        "Jmeter"
      ]
    },
    {
      "cells": [
        "API"
      ]
    },
    {
      "cells": [
        "SQL"
      ]
    },
    {
      "cells": [
        "Github"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.iVerifyTheFollowingDashboardsAreDisplayed(String\u003e)"
});
formatter.write("2021-02-25 23:01:13 Pass: All Topics dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:13 Pass: Coding dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:13 Pass: Soft skills dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: Cucumber dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: Java dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: Jmeter dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: API dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: SQL dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: Github dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:14 Pass: All the dashboards are displayed as expected: [All Topics, Coding, Soft skills, Cucumber, Java, Jmeter, API, SQL, Github]");
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Khali\" in the \"New dashboard\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-25 23:01:16 Pass: Khali was entered in New dashboard input box successfully");
formatter.embedding("image/png", "embedded6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"+ Add\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-25 23:01:17 Pass: + Add button was successfully clicked ");
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the following dashboards are displayed:",
  "rows": [
    {
      "cells": [
        "All Topics"
      ]
    },
    {
      "cells": [
        "Coding"
      ]
    },
    {
      "cells": [
        "Soft skills"
      ]
    },
    {
      "cells": [
        "Cucumber"
      ]
    },
    {
      "cells": [
        "Java"
      ]
    },
    {
      "cells": [
        "Jmeter"
      ]
    },
    {
      "cells": [
        "API"
      ]
    },
    {
      "cells": [
        "SQL"
      ]
    },
    {
      "cells": [
        "Github"
      ]
    },
    {
      "cells": [
        "Khali"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.iVerifyTheFollowingDashboardsAreDisplayed(String\u003e)"
});
formatter.write("2021-02-25 23:01:18 Pass: All Topics dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Coding dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Soft skills dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Cucumber dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Java dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Jmeter dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: API dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: SQL dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Github dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: Khali dashboard is displayed as expected");
formatter.write("2021-02-25 23:01:18 Pass: All the dashboards are displayed as expected: [All Topics, Coding, Soft skills, Cucumber, Java, Jmeter, API, SQL, Github, Khali]");
formatter.embedding("image/png", "embedded8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Khali\" in the \"New dashboard\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-25 23:01:19 Pass: Khali was entered in New dashboard input box successfully");
formatter.embedding("image/png", "embedded9.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"+ Add\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-25 23:01:20 Pass: + Add button was successfully clicked ");
formatter.embedding("image/png", "embedded10.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"already exists\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.iShouldSeeErrorMessage(String)"
});
formatter.write("2021-02-25 23:01:21 Pass: \u0027already exists\u0027 is displayed as expected ");
formatter.embedding("image/png", "embedded11.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete the following dashboard:",
  "rows": [
    {
      "cells": [
        "Khali"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});