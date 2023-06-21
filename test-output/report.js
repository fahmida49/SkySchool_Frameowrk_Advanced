$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Customer_Contact_Number_Modification_Functionality.feature");
formatter.feature({
  "name": "Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I Click on Profile Menu",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Update Info",
  "keyword": "And "
});
formatter.step({
  "name": "I Replace the Contact Number to 44555",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Contact Number is changed to 44555",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Profile Menu",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Update Info",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_update_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Replace the Contact Number to 44555",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_replace_the_contact_number_to(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Contact Number is changed to 44555",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_contact_number_is_changed_to(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/InvalidLoginFunctionality_usingExcel.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "I Enter User Id from row number \"\u003crownumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rownumber"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login%20Feaature%20Validations.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the Login Error Message \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password",
        "error_message"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "33333",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "1234",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "3333",
        "Invalid username or password!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"33333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"3333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});