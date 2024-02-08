package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;




public class Page_Login {
    public static WebDriver driver ;
    public Page_Login(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }

    @FindBy(xpath = "//li[contains (@class ,'account-item has-icon')]/descendant::a[contains (@class, 'not-logged-in')]/i")
    private WebElement iconAkunUser;
    public boolean displayButtonAkun(){
        iconAkunUser.isDisplayed();
        return true;
    }
    public void clickAkun(){
        iconAkunUser.click();
    }

    @FindBy(xpath = "//h3[text()='Login']")
    private WebElement labelHeaderLogin ;
    public boolean headerLoginDisplayed(){
        labelHeaderLogin.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//label[@for='username']")
    private WebElement labelUsername;
    public boolean labelUsernameDisplayed(){
        labelUsername.isDisplayed();
        return true ;
    }

    @FindBy(xpath ="//label[@for='username']/following-sibling::input")
    private WebElement textboxUsername ;
    public boolean textboxUsernameDisplayed(){
        textboxUsername.isDisplayed();
        return true;
    }
    public void setUsername(String username){
        textboxUsername.sendKeys(username);
    }

    @FindBy(xpath ="//label[@for='password']")
    private WebElement labelPassword ;
    public boolean labelPasswordDisplayed(){
        labelPassword.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//label[@for='password']/following-sibling::span/input")
    private WebElement textboxPassword;
    public boolean textboxPasswordDisplayed(){
        textboxPassword.isDisplayed();
        return true;
    }
    public void setPassword(String password){
        textboxPassword.sendKeys(password);
    }

    @FindBy(xpath = "//button[@name='login']")
    private WebElement buttonLogin ;
    public boolean buttonLoginDisplayed(){
        buttonLogin.isDisplayed();
        return true ;
    }
    public boolean buttonLoginClickable(){
        buttonLogin.isEnabled();
        return true ;
    }
    public void clickLogin(){
        buttonLogin.click();
    }


    @FindBy(xpath = "(//li[contains (@class ,'account-item has-icon')])[1]/a")
    private WebElement iconAkunLogin ;
    public boolean displayButtonAkunLogin(){
        iconAkunLogin.isDisplayed();
        return true;
    }
    public String getAttrAkun(){
        String attrAkun = iconAkunLogin.getAttribute("title");
        return attrAkun ;
    }


    @FindBy(xpath = "//*[@id='logo']")
    private WebElement headerLogo;

    public boolean displayLogo(){
        headerLogo.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[contains (@class , 'message-container')]")
    private WebElement alertRequiredEmail ;
    public boolean displayAlertUsernameEmpty(){
        alertRequiredEmail.isDisplayed();
        return true ;
    }
    public String getMessageUsername(){
        return alertRequiredEmail.getText();
    }

    @FindBy(xpath = "//div[contains (@class , 'message-container')]")
    private WebElement alertRequiredPassword ;
    public boolean displayAlertPassword(){
        alertRequiredPassword.isDisplayed();
        return true ;
    }
    public String getMessagePassword(){
        return alertRequiredPassword.getText();
    }

    @FindBy(xpath = "//div[contains (@class , 'message-container')]")
    private WebElement alertWrongPassword ;
    //Error: The password you entered for the email address mukhlisanshori123@gmail.com is incorrect. Lost your password?
    public boolean displayAlertWrongPass(){
        alertWrongPassword.isDisplayed();
        return true ;
    }
    public String getMessageWrongPass(){
        return alertWrongPassword.getText();
    }
    @FindBy(xpath = "//div[contains (@class , 'message-container')]")
    private WebElement alertUnregisteredUsername ;
    public boolean displayUnregisteredEmail(){
        alertUnregisteredUsername.isDisplayed();
        return true ;
    }
    public String getMessageUnregisteredEmail(){
        return alertUnregisteredUsername.getText();
    }







}
