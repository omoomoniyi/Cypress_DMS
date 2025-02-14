describe("Customers", () => {
  it("Adding New Customers", () => {
    cy.visit("/");

    //cy.screenshot("Home Page")

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(":nth-child(2) > .sidebar-nav-item--link > span").click();
      cy.get(".btn").click();
      cy.generateFullName().then((fullName) => {
        cy.get(":nth-child(1) > div > .form__input").type(fullName);
        cy.log(`Generated Name: ${fullName}`);
      });
      cy.get(":nth-child(1) > div > .form__input").type(" Omoniyi iDan");
      cy.generateEmail().then((email) => {
        cy.get("#email").type(email);
        cy.log(email);
        cy.generatePhoneNumber().then((randomPhone) => {
            cy.get('#phone').type(randomPhone); // Adjust selector based on your form
        });
        cy.get('.form-buttons > .app-button > .btn').click();
      });
    });
    cy.visit("/");

  });
});
