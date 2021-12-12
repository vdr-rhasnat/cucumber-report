var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'D:/Projects/parata-drugdatabase-qa/target/cucumber/cucumber.json',
    output: './report/drug_db_test_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name: "Drug DB Test Report",
    brandTitle: "Drug DB Test"
};

reporter.generate(options);