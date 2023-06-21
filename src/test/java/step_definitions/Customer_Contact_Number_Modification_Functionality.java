package step_definitions;

import  static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Customer_Contact_Number_Modification_Functionality extends Base {
	//ctrl+shift+F format for indent
	
	@Given("I am in landing page http:\\/\\/it.microtechlimited.com")
	public void i_am_in_landing_page_http_it_microtechlimited_com() {
		navigateURL(host);
	}

	@When("I Click on Login menu")
	public void i_click_on_login_menu() {
		click( By.xpath("//a[@href='elogin.php']") );
	}

	@When("Click on Customer Login")
	public void click_on_customer_login() {
		click(By.xpath("//a[@href='clogin.php']") );
	}

	@Then("Enter User Id as {string}")
	public void enter_User_Id_as(String userId) {
		
		sendkeys(By.xpath("//input[@name='mailuid']"), userId );
	}	

	@Then("I Enter Password as {string}")
	public void i_Enter_Password_as(String password) {
		sendkeys(By.xpath("//input[@name='pwd']"), password);
	}
	
	@Then("I Click on Login Button")
	public void i_click_on_login_button() {
		click( By.name("login-submit")  );
	}

	@Then("Verify that I am in Home Page")
	public void verify_that_i_am_in_home_page() {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h2[2]") ));
		
		String s = getElementText( By.xpath("//h2[2]") );
	}

	@Then("Verify the Login Error Message {string}")
	public void verify_the_Login_Error_Message(String errMsg) {
		String actualErrMsg =  getElementText(By.id("error-msg"));
		assertEquals(errMsg , actualErrMsg);
	}
	
	@Then("I Click on Profile Menu")
	public void i_click_on_profile_menu() {
		click( By.linkText("My Profile") );
	}

	@Then("I Click on Update Info")
	public void i_click_on_update_info() {
		click( By.xpath("//button[@name='send']") );
	}

	@Then("I Replace the Contact Number to {int}")
	public void i_replace_the_contact_number_to(Integer int1) {
		clear( By.name("contact"));
		sendkeys( By.name("contact") , "44555");
	}

	@Then("I Click Submit button")
	public void i_click_submit_button() {
		click( By.name("update") );
	}

	@Then("Verify Contact Number is changed to {int}")
	public void verify_contact_number_is_changed_to(Integer int1) {
		String v = driver.findElement( By.name("contact") ).getAttribute("value");
		assertEquals("44555", v);
	}

}
