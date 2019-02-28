//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

When('I try to login', () => {
  var cajaLogIn = browser.element('.cajaLogIn');
  cajaLogIn.element('button=Ingresar').click()
});

Then('I expect to see {string}', error => {
  if(error != 'LOGIN_SUCESS'){
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  }else{
    browser.waitForVisible('button[id=cuenta]', 5000);
    expect(browser.isVisible('button[id=cuenta]')).to.be.equal(true);
  }
    
});

// Registrar estudiante

When('I open the register screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When(/^I fill with (.*), (.*), (.*), (.*), (.*) and (.*)$/ , (firstname, lastname, email, program, password, accept) => {
    browser.waitForVisible('.loginForm', 10000);
    var cajaSingUp = browser.element('.loginForm');

    var firstnameInput = cajaSingUp.element('input[name="nombre"]');
    firstnameInput.click();
    firstnameInput.keys(firstname);

    var lastnameInput = cajaSingUp.element('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.keys(lastname);

    var emailInput = cajaSingUp.element('input[name="correo"]');
    emailInput.click();
    emailInput.keys(email);
    if(program!=''){
      cajaSingUp.element('select[name="idPrograma"]').selectByIndex(program);  
    }

    var passwordInput = cajaSingUp.element('input[name="password"]');
      passwordInput.click();
    if(password!=''){      
      passwordInput.keys(password);
    }else{
      passwordInput.clear();
    }
    
    if(accept == 'true'){
      cajaSingUp.element('input[name="acepta"]').click();
    }
    
  });

  When('I try to register', () => {
    var cajaSingUp = browser.element('.loginForm');
    cajaSingUp.element('button=Registrarse').click()
  });

Then('I expect to receive {string}', error => {

  if(error == 'NO_SELECTED'){        
    var program = browser.element('select[name=idPrograma]');
    expect(program.getValue()).to.be.equal('inicial');    
  }else{
    if(error == 'FIRSTNAME_EMPTY'){
      var cajaSingUp = browser.element('.loginForm');
      var firstnameInput = cajaSingUp.element('input[name="nombre"]');
      expect(firstnameInput.getText()).to.be.equal('');
    }else{
      if(error == 'LASTNAME_EMPTY'){
        var cajaSingUp = browser.element('.loginForm');
        var lastnameInput = cajaSingUp.element('input[name="apellido"]');
        expect(lastnameInput.getText()).to.be.equal('');
      }else{
        if(error = 'exitoso'){
          browser.waitForVisible('.sweet-alert', 5000);
          var alertText = browser.element('.sweet-alert').element('h2').getText();
          expect(alertText).to.include(error);
        }else{
          if(error == 'error activando'){
            browser.waitForVisible('.sweet-alert', 5000);
            var alertText = browser.element('.sweet-alert').element('h2').getText();
            expect(alertText).to.include(error);
          }else{
            browser.waitForVisible('.aviso.alert.alert-danger', 5000);
            var alertText = browser.element('.aviso.alert.alert-danger').getText();
            expect(alertText).to.include(error);
          }          
        }        
      }      
    }    
  }    
});

});
