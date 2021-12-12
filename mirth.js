var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'D:/Projects/mirth-api-test/target/cucumber/cucumber.json',
    output: './report/mirth_conversion_test_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name: "Mirth Conversion Test Report",
    brandTitle: "Mirth Conversion Test"
};

reporter.generate(options);