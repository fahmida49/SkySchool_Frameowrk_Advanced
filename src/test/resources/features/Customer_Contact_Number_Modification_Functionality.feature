Feature: Customer Contact Number Modification functionality


Background:
Given I am in landing page http://it.microtechlimited.com
When I Click on Login menu
 


@Sanity @Regression
Scenario Outline: Verify Customer Contact Number Modification functionality

And Click on Customer Login
Then Enter User Id as "<userId>"          
And I Enter Password as "<password>"
And I Click on Login Button
Then Verify that I am in Home Page
Examples:
|userId          |password|
|david@gmail.com | 1234   |

@Regression
Scenario Outline: Verify Customer Contact Number Modification functionality
And Click on Customer Login
Then Enter User Id as "<userId>"          
And I Enter Password as "<password>"
And I Click on Login Button
Then Verify that I am in Home Page
And I Click on Profile Menu
And I Click on Update Info
And I Replace the Contact Number to 44555
And I Click Submit button
Then Verify Contact Number is changed to 44555

Examples:
|userId          |password|
|david@gmail.com | 1234   |