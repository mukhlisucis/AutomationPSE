@LoginTes
  Feature: LoginTes
    User ingin melakukan login di https://www.psegameshop.com/
    @LoginTes
  Scenario: Login with valid value
    Given user membuka situs psegameshop
    When user memastikan header logo dan tombol akun terlihat pada halaman
    And user click button icon akun user untuk login
    And user memastikan label login label username label password terlihat pada halaman
    Then user melakukan input username "mukhlisanshori123@gmail.com" password "PasswordMukhlis123!"
    And user memastikan button login bisa di click
    And user click button Login
    Then user berhasil login

    @LoginTes
    Scenario: Login with username and password null
    Given user membuka situs psegameshop
        When user memastikan header logo dan tombol akun terlihat pada halaman
        And user click button icon akun user untuk login
        And user memastikan label login label username label password terlihat pada halaman
        Then user melakukan input username "" password ""
        And user click button Login
        Then alert username require muncul pada halaman

    @LoginTes
    Scenario: Login with username null
        Given user membuka situs psegameshop
            When user memastikan header logo dan tombol akun terlihat pada halaman
            And user click button icon akun user untuk login
            And user memastikan label login label username label password terlihat pada halaman
            Then user melakukan input username "" password "PasswordMukhlis123!"
            And user click button Login
            Then alert username require muncul pada halaman

    @LoginTes
    Scenario: Login with password null
        Given user membuka situs psegameshop
            When user memastikan header logo dan tombol akun terlihat pada halaman
            And user click button icon akun user untuk login
            And user memastikan label login label username label password terlihat pada halaman
            Then user melakukan input username "mukhlisanshori123@gmail.com" password ""
            And user click button Login
            Then alert password require muncul pada halaman

    @LoginTes
    Scenario: Login with wrong password
      Given user membuka situs psegameshop
      When user memastikan header logo dan tombol akun terlihat pada halaman
      And user click button icon akun user untuk login
      And user memastikan label login label username label password terlihat pada halaman
      Then user melakukan input username "mukhlisanshori123@gmail.com" password "WrongPassword123!"
      And user click button Login
      Then alert invalid password muncul pada halaman

    @LoginTes
    Scenario: Login with unregistered username
      Given user membuka situs psegameshop
      When user memastikan header logo dan tombol akun terlihat pada halaman
      And user click button icon akun user untuk login
      And user memastikan label login label username label password terlihat pada halaman
      Then user melakukan input username "mukhlisanshori1997@gmail.com" password "PasswordMukhlis123!"
      And user click button Login
      Then alert invalid email muncul pada halaman