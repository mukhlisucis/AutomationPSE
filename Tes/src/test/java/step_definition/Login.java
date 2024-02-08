package step_definition;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.Page_Login;
import org.openqa.selenium.WebDriver;
import org.junit.Assert;

public class Login {
    private WebDriver webDriver;
    public Login(){
        super();
        this.webDriver = Hooks.webDriver ;
    }
    @Given("user membuka situs psegameshop")
    public void dashboardPage(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.displayLogo() ;
    }
    @When("user memastikan header logo dan tombol akun terlihat pada halaman")
    public void headerAkunDisplayed(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.displayLogo();
        pageLogin.displayButtonAkun();
    }
    @And("user click button icon akun user untuk login")
    public void clickAkun() throws InterruptedException {
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.clickAkun();
        Thread.sleep(4000);
    }

    @And("user memastikan label login label username label password terlihat pada halaman")
    public void cekLabel(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.headerLoginDisplayed();
        pageLogin.labelUsernameDisplayed();
        pageLogin.labelPasswordDisplayed();
    }

    @Then("^user melakukan input username \"([^\"]*)\" password \"([^\"]*)\"$")
    public void inputUserPass(String username , String password){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.setUsername(username);
        pageLogin.setPassword(password);
    }

    @And("user memastikan button login bisa di click")
    public void buttonLoginClickable(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.buttonLoginDisplayed();
    }

    @And("user click button Login")
    public void clickLogin(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.clickLogin();
    }

    @Then("user berhasil login")
    public void suksesLogin(){
        Page_Login pageLogin = new Page_Login(webDriver);
        pageLogin.displayLogo();
        pageLogin.displayButtonAkunLogin();
        pageLogin.getAttrAkun();
        Assert.assertEquals("My account", pageLogin.getAttrAkun());
    }

    @Then("alert username require muncul pada halaman")
    public void alertUsernameRequiredDisplayed() throws InterruptedException {
        Page_Login pageLogin = new Page_Login(webDriver);
        Thread.sleep(4000);
        pageLogin.displayAlertUsernameEmpty();
        Assert.assertEquals("Error: Username is required.", pageLogin.getMessageUsername());

    }

    @Then("alert password require muncul pada halaman")
    public void alertPasswordRequiredDisplayed() throws InterruptedException {
        Page_Login pageLogin = new Page_Login(webDriver);
        Thread.sleep(4000);
        pageLogin.displayAlertPassword();
        Assert.assertEquals("Error: The password field is empty.", pageLogin.getMessagePassword());

    }
    @Then("alert invalid password muncul pada halaman")
    public void alertInvalidPasswordDisplayed() throws InterruptedException {
        Page_Login pageLogin = new Page_Login(webDriver);
        Thread.sleep(4000);
        pageLogin.displayAlertWrongPass();
        Assert.assertEquals("Error: The password you entered for the email address mukhlisanshori123@gmail.com is incorrect. Lost your password?", pageLogin.getMessageWrongPass());
    }

    @Then("alert invalid email muncul pada halaman")
    public void alertInvalidEmailDisplayed() throws InterruptedException {
        Page_Login pageLogin = new Page_Login(webDriver);
        Thread.sleep(4000);
        pageLogin.displayUnregisteredEmail();
        Assert.assertEquals("Unknown email address. Check again or try your username.", pageLogin.getMessageUnregisteredEmail());

    }
}
