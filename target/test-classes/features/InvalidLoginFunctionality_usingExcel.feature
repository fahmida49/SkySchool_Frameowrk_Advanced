Feature: Verify Customer Login functionality


@Sanity @Regression
Scenario Outline: Verify Customer Login functionality negative Testing
Given I am in company site
When I Click Login menu
And Click Customer Login
Then I Enter User Id from row number "<rownumber>"         
And I Enter Password
When I Click Login Button
Then Verify Login Error Message

Examples: 
|rownumber|
|0        |
|1        |
|2        |
