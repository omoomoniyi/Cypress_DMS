describe("Creating Sales Orders Using New Customer", () => {

  it("Creating Sales Orders Using New Customer", () => {
    cy.visit("/");

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      //Handling Update Application Modal
      cy.handleAppUpdateConditionalModal('.app-modal-body-content', '.btn');



      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
      cy.get('.table-top-header--menu > .app-button > .btn').click();
      cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('Test_SKU_Price_Change -');
      cy.get(':nth-child(2) > div > .form__input').type('1');
      cy.wait(2000);
      cy.contains('Proceed').click();
      cy.get('#preview-sales-order').click();
      cy.get(':nth-child(1)>.radio-items>.form-check>.radio-items__label').click();
      cy.generatePhoneNumber().then((randomPhone) => {
        cy.get(':nth-child(2)>div>.form__input').type(randomPhone); // Adjust selector based on your form
    });
      //cy.get(':nth-child(2)>div>.form__input').type('08028049533');
      cy.get(':nth-child(3)>div>.form__input').type('Omodayo');
      cy.get('#enter-customer-details').click();
      cy.get('.form__input').type('120');
      cy.get('#view-sales-order').click();
      cy.get(':nth-child(3)>.app-modal-body>.app-modal-form-submit>.form-buttons>.app-button>.btn').click();
      cy.wait(2000);
      cy.contains("Your sales order has been successfully created").should("be.visible");

      

    });
  });

  it("Creating Sales Orders Using Existing Customer", () => {

    cy.visit("/");

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      //Handling Update Application Modal
      cy.handleAppUpdateConditionalModal('.app-modal-body-content', '.btn');



      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
      cy.get('.table-top-header--menu > .app-button > .btn').click();
      cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('Test_SKU_Price_Change -');
      cy.get(':nth-child(2) > div > .form__input').type('1');
      cy.wait(2000);
      cy.contains('Proceed').click();
      cy.get('#preview-sales-order').click();
      cy.get(':nth-child(1)>.radio-items>.form-check>.radio-items__label').click();
    //   cy.generatePhoneNumber().then((randomPhone) => {
    //     cy.get(':nth-child(2)>div>.form__input').type(randomPhone); // Adjust selector based on your form
    // });
      cy.get(':nth-child(2)>div>.form__input').type('08028049533');
      cy.get(':nth-child(3)>div>.form__input').type('Omodayo');
      cy.get('#enter-customer-details').click();
      cy.get('.form__input').type('120');
      cy.get('#view-sales-order').click();
      cy.get(':nth-child(3)>.app-modal-body>.app-modal-form-submit>.form-buttons>.app-button>.btn').click();
      cy.wait(2000);
      cy.contains("Unable to process your request. Please try again").should("be.visible");

      

    });
  });

  it("Creating Sales Orders Using New Customer With Partial Payment", () => {
    cy.visit("/");

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      //Handling Update Application Modal
      cy.handleAppUpdateConditionalModal('.app-modal-body-content', '.btn');



      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
      cy.get('.table-top-header--menu > .app-button > .btn').click();
      cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('Test_SKU_Price_Change -');
      cy.get(':nth-child(2) > div > .form__input').type('1');
      cy.wait(2000);
      cy.contains('Proceed').click();
      cy.get('#preview-sales-order').click();
      cy.get(':nth-child(1)>.radio-items>.form-check>.radio-items__label').click();
      cy.generatePhoneNumber().then((randomPhone) => {
        cy.get(':nth-child(2)>div>.form__input').type(randomPhone); // Adjust selector based on your form
    });
      //cy.get(':nth-child(2)>div>.form__input').type('08028049533');
      cy.get(':nth-child(3)>div>.form__input').type('Omodayo');
      cy.get('#enter-customer-details').click();
      cy.get('.form__input').type('100');
      cy.get('#view-sales-order').click();
      cy.get(':nth-child(3)>.app-modal-body>.app-modal-form-submit>.form-buttons>.app-button>.btn').click();
      cy.wait(2000);
      cy.contains("Your sales order has been successfully created").should("be.visible");

      

    });
  });

  it("Creating Sales Orders with SKU with 0 Quantity", () => {
    cy.visit("/");

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      //Handling Update Application Modal
      cy.handleAppUpdateConditionalModal('.app-modal-body-content', '.btn');



      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
      cy.get('.table-top-header--menu > .app-button > .btn').click();
      cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('CPL28X10');
      cy.get(':nth-child(2) > div > .form__input').type('1');
      cy.wait(2000);
      cy.contains('Proceed').click();
      cy.contains("Some of the booked stock don't have enough Quantity").should("be.visible");

    });
  });

  it("Creating Sales Orders with SKU Quantity Qty Higher/Greater Available Stock", () => {
    cy.visit("/");

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(5000);

      //Handling Update Application Modal
      cy.handleAppUpdateConditionalModal('.app-modal-body-content', '.btn');



      cy.get(".burger > .material-symbols-outlined").click();
      cy.get(':nth-child(3) > .sidebar-nav-item--link > span').click();
      cy.get('.table-top-header--menu > .app-button > .btn').click();
      cy.get('[style="margin-bottom: 20px;"] > div > .form__input').type('AGV AFRICAN NOODLES -');
      cy.get(':nth-child(2) > div > .form__input').type('100');
      cy.wait(2000);
      cy.contains('Proceed').click();
      cy.contains("Some of the booked stock don't have enough Quantity").should("be.visible");

    });
  });
});


