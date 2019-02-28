#Desdripcion historia de usuario registro estudiante
Feature: Login into losestudiantes
    As an student
    I want to register myself in the losestudiantes website 
    to have and user and password valid in the system 

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the register screen
    And I fill with <firstname>, <lastname>, <email>, <program>, <password>, and <accept>
    And I try to register
    Then I expect to receive <error>

    Examples:
      | firstname | lastname | email               | program     | password | accept | error                                           |
      | Reinaldo  | Porto    | portocr@example.com | 12          | 12345678 | false  | Debes aceptar los términos y condiciones        |
      | Reinaldo  | Porto    | portocr@example.com |             | 12345678 | true   | NO_SELECTED                                     |
      |           | Porto    | portocr@example.com | 12          | 12345678 | true   | FIRSTNAME_EMPTY                                 |
      | Reinaldo  |          | portocr@example.com | 12          | 12345678 | true   | LASTNAME_EMPTY                                  |
      | Reinaldo  | Porto    |                     | 12          | 12345678 | true   | Ingresa tu correo                               |
      | Reinaldo  | Porto    | portocr@example.com | 12          |          | true   | Ingresa una contraseña                          |
      | Reinaldo  | Porto    | portocr@example.com | 12          | 1234     | true   | La contraseña debe ser al menos de 8 caracteres |
      | Reinaldo  | Porto    | portocr@example.com | 12          | 12345678 | true   | exitoso                                         |
      | Reinaldo  | Porto    | portocr@example.com | 12          | 12345678 | true   | error activando                                 |
      