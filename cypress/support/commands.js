// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("validLoginFlow", (userData) => {
  cy.get("#username").type(userData.validPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
});

Cypress.Commands.add("invalidPhoneValidPassword", (userData) => {
  cy.get("#username").type(userData.invalidPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

Cypress.Commands.add("invalidPhoneInvalidPassword", (userData) => {
  cy.get("#username").type(userData.invalidPhone);
  cy.get("#password").type(userData.invalidPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

Cypress.Commands.add("blankPhonevalidPassword", (userData) => {
  cy.get("#username").type(userData.blankPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

Cypress.Commands.add("validPhoneblankPassword", (userData) => {
  cy.get("#username").type(userData.blankPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
  cy.contains("Wrong Password").should("be.visible");
});

Cypress.Commands.add('signUpWithExistingCustomer', (userData) => {

    cy.contains('Sign Up').click(); //Unable to get correct Sign-Up Elements
    cy.get('.text-center>.text-\[\#0275D8\]').click();
    cy.get('.mt-4 > :nth-child(1) > [style="position: relative;"] > .select-wrapper > .select__input').click();

    // cy.get('#password').type(userData.validPassword);
    // cy.get('.btn').click();
    // cy.contains("This user doesn't exist").should('be.visible');

})

Cypress.Commands.add("forgetPasswordExistingValidCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.validPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("Password reset code sent").should("be.visible");
});

Cypress.Commands.add("forgetPasswordNonExistingCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.NonExistingCustomerPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("User is not registered").should("be.visible");
});

Cypress.Commands.add("forgetPasswordInvalidCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.invalidPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("Phone numbers should have a minimum of 11 numbers").should(
    "be.visible"
  );
});

Cypress.Commands.add("forgetPasswordForalidCustomerPhoneThatDoesNotStartWith0",(userData) => {
    cy.get(".ml-auto").click();
    cy.get(".form__input").type(userData.CustomerNumberNotStartingWith0);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Phone numbers should start with 0").should("be.visible");
  }
);

Cypress.Commands.add("generatePhoneNumber", (prefix = "080") => {
  return prefix + Math.floor(10000000 + Math.random() * 90000000);
});

//Generating random emails
Cypress.Commands.add("generateEmail", (domain = "test.com") => {
  return `user${Date.now()}@${domain}`;
});

//Generating Random Names
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('generateFullName', () => {
    const firstName = faker.person.firstName(); // Generate a random first name
    const lastName = faker.person.lastName();   // Generate a random last name
    return `${firstName} ${lastName}`;          // Return full name
  });

  Cypress.Commands.add('handleAppUpdateConditionalModal', (modalSelector, buttonSelector) => {
    cy.get('body').then(($body) => {
      if ($body.find(modalSelector).length > 0) {
        cy.get(modalSelector).should('be.visible').within(() => {
          cy.get(buttonSelector).should('be.visible').click();
        });
      } else {
        cy.log('Modal not found, continuing...');
      }
    });
  });
  

  // Cypress.Commands.add('handleUpdateApplicationModal', (modalSelector, closeBtnSelector) => {
  //   // Check if modalSelector exists
  //  cy.get('body').then(($body)=>{
  //   if($body.find('.app-modal-body-content').length > 0){
  //     cy.get('.app-modal-body-content').should(($modal) => { // Check on the 'body' to ensure the modal is attached to the DOM
  //       cy.log('Modal found!', modalSelector); // More descriptive log message
  //       cy.log($modal.find(modalSelector))
  //       if ($modal.find(modalSelector).length > 0) {
    
  //         // Instead of hardcoding selectors, use the provided arguments
  //         cy.get(modalSelector).should('be.visible'); // Check visibility of the specific modal
    
  //         // If closeBtnSelector is provided, click it. Otherwise, handle as needed.
  //         if (closeBtnSelector) {
  //           cy.get(closeBtnSelector).click();  // Click the specific close button
  //         } else {
  //           // Handle the case where no close button selector is provided.
  //           // For example, you might want to assert something about the modal
  //           // or interact with other elements within it.
  //           cy.log('No close button selector provided.  Handling modal content...');
  //           // Example:  cy.get(modalSelector).find('.some-element-inside-modal').should('exist');
  //         }
    
  //       } else {
  //         cy.log('No modal detected, continuing...');
  //       }
  //     });
