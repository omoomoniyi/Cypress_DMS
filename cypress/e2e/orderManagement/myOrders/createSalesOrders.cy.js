describe("Create Sales Order", () => {
    it("Creating Sales Orders", () => {
      cy.visit("/");
    
      cy.fixture("customerData").then((userData) => {
        let customerDetailsInfo = userData.customerInfo[0];
        cy.validLoginFlow(customerDetailsInfo);
  
        cy.wait(5000);
        cy.get(".burger > .material-symbols-outlined").click();
        cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
        cy.get('.table-top-header--menu > .app-button > .btn').click();
        cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('Test_SKU_Price_Change -');
        cy.get(':nth-child(2) > div > .form__input').type('1');
        cy.wait(2000);
        cy.contains('Proceed').click();

        });
      });
    });

  
