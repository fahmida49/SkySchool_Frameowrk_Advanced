package step_definitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class InvalidLoginFuctionality_usingExcel extends Base {
	int rowNum; 
	String userId;
	String password;
	String errorMsg;
	
	@Given("I am in company site")
	public void i_am_in_company_site() {
		navigateURL(host);
	}

	@When("I Click Login menu")
	public void i_Click_Login_menu() {
		click( By.xpath("//a[@href='elogin.php']") );
	}

	@When("Click Customer Login")
	public void click_Customer_Login() {
		click(By.xpath("//a[@href='clogin.php']") );
	}

	@Then("I Enter User Id from row number {string}")
	public void i_Enter_User_Id_from_row_number(String rowNumber) {
		rowNum = Integer.parseInt(rowNumber);
		userId = testData.get(rowNum).get("userId");
		sendkeys(By.xpath("//input[@name='mailuid']"), userId );
	}

	@Then("I Enter Password")
	public void i_Enter_Password_from_row_number() {
		password = testData.get(rowNum).get("password");
		sendkeys(By.xpath("//input[@name='pwd']"), password);
	}

	@When("I Click Login Button")
	public void i_Click_Login_Button() {
		click( By.name("login-submit")  );
	}

	@Then("Verify Login Error Message")
	public void verify_Login_Error_Message_from_row_number() {
		errorMsg = testData.get(rowNum).get("error_message");
		String actualErrMsg =  getElementText(By.id("error-msg"));
		assertEquals(errorMsg , actualErrMsg);

	}

}
