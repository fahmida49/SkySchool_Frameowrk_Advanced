package base;
import java.io.FileInputStream;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import utils.ExcelReader;


public class Base {
	
	public static WebDriver driver; //default
	public static FileInputStream fis;
	public static Properties config;
	public static String host;
	public static ExcelReader excelReader;
	public static List<Map<String,String>> testData;
	//public static WebDriver firefoxDriver; //default
	
	
	public static void navigateURL(String url) {
		driver.get(url);
	}
	
	public static void click(By locator) {
		driver.findElement( locator ).click();
	}
	
	public static void clear(By locator) {
		driver.findElement( locator ).clear();
	}
	
	
	public static void sendkeys(By locator, String value) {
		driver.findElement( locator ).sendKeys( value  );
	}
	public static void dropdownMenu(By locator,String value) {
		Select sec = new Select(driver.findElement(locator));
		sec.selectByValue(value);
	}
	
	public static void selectByVisibleText(By locator,String TextValue) {
		Select sec = new Select(driver.findElement(locator));
		sec.selectByValue(TextValue);
	}
	public static void selectByIndex(By locator,String indexValue) {
		Select sec = new Select(driver.findElement(locator));
		sec.selectByValue(indexValue);
	}

		public static void mousehover(By locator) {
			WebElement element = driver.findElement(locator);
			Actions act = new Actions(driver);
			act.moveToElement(element).build().perform();
		}
		
	
	
	public static String getElementText(By locator) {
		//Get the Text of that Element (H3) Online Access
		WebElement element =  driver.findElement( locator );
		//get the text of that element
		String s = element.getText();	
		return s;
	}
}