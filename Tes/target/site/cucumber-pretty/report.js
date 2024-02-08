$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginTes.feature");
formatter.feature({
  "line": 2,
  "name": "LoginTes",
  "description": "User ingin melakukan login di https://www.psegameshop.com/",
  "id": "logintes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTes"
    }
  ]
});
formatter.before({
  "duration": 7379063400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid value",
  "description": "",
  "id": "logintes;login-with-valid-value",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user melakukan input username \"mukhlisanshori123@gmail.com\" password \"PasswordMukhlis123!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user memastikan button login bisa di click",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user berhasil login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 103009700,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 79191900,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4065830800,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 79038900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori123@gmail.com",
      "offset": 31
    },
    {
      "val": "PasswordMukhlis123!",
      "offset": 70
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 257412400,
  "status": "passed"
});
formatter.match({
  "location": "Login.buttonLoginClickable()"
});
formatter.result({
  "duration": 22763700,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 13690767100,
  "status": "passed"
});
formatter.match({
  "location": "Login.suksesLogin()"
});
formatter.result({
  "duration": 85978300,
  "status": "passed"
});
formatter.after({
  "duration": 962006500,
  "status": "passed"
});
formatter.before({
  "duration": 4073238500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with username and password null",
  "description": "",
  "id": "logintes;login-with-username-and-password-null",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user melakukan input username \"\" password \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "alert username require muncul pada halaman",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 27643100,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 47522400,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4108727400,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 62796700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "",
      "offset": 43
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 103719400,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 2274953600,
  "status": "passed"
});
formatter.match({
  "location": "Login.alertUsernameRequiredDisplayed()"
});
formatter.result({
  "duration": 4063148900,
  "status": "passed"
});
formatter.after({
  "duration": 971234400,
  "status": "passed"
});
formatter.before({
  "duration": 4250085300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with username null",
  "description": "",
  "id": "logintes;login-with-username-null",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user melakukan input username \"\" password \"PasswordMukhlis123!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "alert username require muncul pada halaman",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 38254800,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 76434100,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4066782700,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 64901900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "PasswordMukhlis123!",
      "offset": 43
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 201512600,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 2265880500,
  "status": "passed"
});
formatter.match({
  "location": "Login.alertUsernameRequiredDisplayed()"
});
formatter.result({
  "duration": 4058922700,
  "status": "passed"
});
formatter.after({
  "duration": 931279400,
  "status": "passed"
});
formatter.before({
  "duration": 4134398300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login with password null",
  "description": "",
  "id": "logintes;login-with-password-null",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user melakukan input username \"mukhlisanshori123@gmail.com\" password \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "alert password require muncul pada halaman",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 29161200,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 41791200,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4075222100,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 74671000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori123@gmail.com",
      "offset": 31
    },
    {
      "val": "",
      "offset": 70
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 168727200,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 2502308400,
  "status": "passed"
});
formatter.match({
  "location": "Login.alertPasswordRequiredDisplayed()"
});
formatter.result({
  "duration": 4063444100,
  "status": "passed"
});
formatter.after({
  "duration": 902972900,
  "status": "passed"
});
formatter.before({
  "duration": 4593957500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Login with wrong password",
  "description": "",
  "id": "logintes;login-with-wrong-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user melakukan input username \"mukhlisanshori123@gmail.com\" password \"WrongPassword123!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "alert invalid password muncul pada halaman",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 24517600,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 40960200,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4066976100,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 71529200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori123@gmail.com",
      "offset": 31
    },
    {
      "val": "WrongPassword123!",
      "offset": 70
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 306686700,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 2358973100,
  "status": "passed"
});
formatter.match({
  "location": "Login.alertInvalidPasswordDisplayed()"
});
formatter.result({
  "duration": 4065297500,
  "status": "passed"
});
formatter.after({
  "duration": 923425000,
  "status": "passed"
});
formatter.before({
  "duration": 3925459700,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Login with unregistered username",
  "description": "",
  "id": "logintes;login-with-unregistered-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@LoginTes"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user membuka situs psegameshop",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user memastikan header logo dan tombol akun terlihat pada halaman",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user click button icon akun user untuk login",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user memastikan label login label username label password terlihat pada halaman",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user melakukan input username \"mukhlisanshori1997@gmail.com\" password \"PasswordMukhlis123!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "alert invalid email muncul pada halaman",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardPage()"
});
formatter.result({
  "duration": 26544300,
  "status": "passed"
});
formatter.match({
  "location": "Login.headerAkunDisplayed()"
});
formatter.result({
  "duration": 40019500,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickAkun()"
});
formatter.result({
  "duration": 4060246000,
  "status": "passed"
});
formatter.match({
  "location": "Login.cekLabel()"
});
formatter.result({
  "duration": 59052600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori1997@gmail.com",
      "offset": 31
    },
    {
      "val": "PasswordMukhlis123!",
      "offset": 71
    }
  ],
  "location": "Login.inputUserPass(String,String)"
});
formatter.result({
  "duration": 279236700,
  "status": "passed"
});
formatter.match({
  "location": "Login.clickLogin()"
});
formatter.result({
  "duration": 2470561200,
  "status": "passed"
});
formatter.match({
  "location": "Login.alertInvalidEmailDisplayed()"
});
formatter.result({
  "duration": 4059629900,
  "status": "passed"
});
formatter.after({
  "duration": 991542100,
  "status": "passed"
});
});