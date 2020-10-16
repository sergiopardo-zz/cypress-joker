Feature: Login

    So that I can manage payrolls
    being a previously registered user
    I can access the system with my email and password

    Scenario: Login
        When I log in with "qa+mexico@runahr.com" and "runahr"
        Then I must be authenticated
        And I must see "¡Hola, Administrador!" on the home page
