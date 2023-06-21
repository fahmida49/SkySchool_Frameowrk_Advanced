package rough;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Rough_Codes {

	public static void main(String[] args) {
		
		WebDriverManager.chromedriver().setup();
		WebDriver browser = new ChromeDriver();
		browser.get("https://bestbuy.com");
		
		WebElement searchBox;
		searchBox = browser.findElement(By.xpath("//input[@id='gh-search-input']"));
		searchBox.sendKeys("camera" + Keys.ENTER);
		
		browser.findElement(By.className("header-search-button")).click();
		
		//browser.findElement(By.xpath("//input[@name='q']")).sendKeys("camera" + Keys.ENTER);
		
		List<WebElement> cameras = new ArrayList<WebElement>();
		cameras = browser.findElements( By.xpath("//ol[@class='sku-item-list']/li") );
		
		for (WebElement camera : cameras ) {
			String name = camera.findElement(By.xpath(".//div/div[@class='priceView-hero-price priceView-customer-price']/span") ).getText();
			System.out.println( name );
		}
		

	}

}
