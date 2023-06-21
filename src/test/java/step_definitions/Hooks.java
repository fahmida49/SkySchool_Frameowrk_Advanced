package step_definitions;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.cucumber.java.Scenario;
import utils.ExcelReader;


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;

import base.Base;


public class Hooks extends Base{
	
	
	@Before
	public void setup() throws IOException, InvalidFormatException {
		
		config = new Properties();
		fis = new FileInputStream( System.getProperty("user.dir") + "\\src\\test\\resources\\cofig\\config.properties");
		config.load(fis);
		
		//initialize excel file
		excelReader = new ExcelReader();
		testData = excelReader.getData(System.getProperty("user.dir") + "\\src\\test\\resources\\testData\\loginData.xlsx", "loginTestData");
		
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(false);
		
		switch (config.getProperty("browser")) {
		case "chrome":
			WebDriverManager.chromedriver().setup();
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.setHeadless(false);
			driver = new ChromeDriver(chromeOptions);
			break;
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			WebDriverManager.firefoxdriver().driverVersion("0.29.1").setup();
			FirefoxOptions firefoxOptions = new FirefoxOptions();
			firefoxOptions.setHeadless(false);
			driver = new FirefoxDriver(firefoxOptions);
			break;
		case "ie":
			WebDriverManager.iedriver().setup();
			InternetExplorerOptions internetExplorerOptions = new InternetExplorerOptions();
			driver = new InternetExplorerDriver(internetExplorerOptions);
			break;
		case "edge":
			WebDriverManager.edgedriver().setup();
			EdgeOptions edgeOptions = new EdgeOptions();
			driver = new EdgeDriver(edgeOptions);
			break;
		}
	
		
		host = config.getProperty("env");
		
		int seconds = Integer.parseInt(config.getProperty("implisitWait"));
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(seconds , TimeUnit.SECONDS);
		System.out.println("before run");
}
	@After
	public void tearDown(Scenario scenario) {
		try {
			String screenshotName= scenario.getName().replace("", "");
			if(scenario.isFailed()) {
				scenario.log("this is my failure message");
				TakesScreenshot ts = (TakesScreenshot)driver;
				byte[]screenshot = ts.getScreenshotAs(OutputType.BYTES);
				scenario.attach(screenshot, "image/png", screenshotName);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		//driver.quit();
	
	}
	@After
	public void tearDown() throws IOException {
		System.out.println("after run");
	fis.close();
		driver.quit();
	}
}
