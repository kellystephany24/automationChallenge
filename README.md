# automationChallenge

Salesforce Classic Automation With Testcafe

Requirements:

-node.js installed (https://nodejs.org/en/download)

-Code Editor : This project was developed in Visual Studio



Project Installation and execution

1.- Download the project

2.- Open folder in the code editor of your preference

3.- On terminal execute the following commands:
    
    -npm i -g testcafe                    
         
          Note: Omit the -g flag to create a local installation
   
    -npm i node-modules
   
    -npm i dotenv


4.- In package.json file are included different executions options: 
    
    "test-chrome": Run all the tests from the framework in chrome browser
    
    "test-firefox":  Run all the test from the framework in firefox browser
    
    "test-chrome-login": Run all test included in Login.test.js file
    
    "test-chrome-SearchResultsPage": Run all test included in SearchResultsPage.test.js 
   
    "test-chrome-Accounts": Run all test included in AccountsPage.test.js
    
    "test-chrome-Contacts": Run all test inclided in ContactsPage.test.js Example: npm run test-chrome-Contacts

    To execute any option type in terminal: npm run "option to be executed" 
   
    Example: npm run test-chrome-Contacts

    Note: More configuration can be added in the package.json file 


Project structure

-src>constants: This folder includes all the files that contains constants and test data used in the different tests

-src>web>pages: This folder includes the different page files that contains selectors and basic actions from every respective page

-src>web>common: This folder includes the different files that contains selectors and more elaborated actions that are going to be used in multiples tests

-test: This folder includes the test files that contains the different test

-package.json - This file include dependencies from the project and execution options

-.env - This file includes the enviroment variables of the framework
    
    Note: For demo purposes credentials are in the file, but credentials should be always remove before getting the project up to any code host platform 
