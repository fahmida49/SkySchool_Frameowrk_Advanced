Feature: Verify Customer Login functionality


@Sanity @Regression
Scenario Outline: Verify Customer Login functionality negative Testing
Given I am in landing page http://it.microtechlimited.com
When I Click on Login menu
And Click on Customer Login
Then Enter User Id as "<userId>"          
And I Enter Password as "<password>"
And I Click on Login Button
Then Verify the Login Error Message "<error_message>"

Examples:
|userId          |password|error_message                |
|david@gmail.com | 33333  |Invalid username or password!|
|kamal@gmail.com | 1234   |Invalid username or password!|
|kamal@gmail.com | 3333   |Invalid username or password!|


@Sanity @Regression
Scenario Outline: Verify Customer Login functionality happy path
Given I am in landing page http://it.microtechlimited.com
When I Click on Login menu
And Click on Customer Login
Then Enter User Id as "<userId>"          
And I Enter Password as "<password>"
And I Click on Login Button
Then Verify that I am in Home Page

Examples:
|userId          |password|
|david@gmail.com | 1234   |





