describe('Forget Password Flow', () =>{

    it('Forget Password of a Existing Valid Customer', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.forgetPasswordExistingValidCustomer(customerDetailsInfo);
            // cy.generatePhoneNumber().then((randomPhone) => {
            //     cy.get('.form__input').type(randomPhone); // Adjust selector based on your form
            //   });
            //   

        });
     

    });

    it('Forget Password of a Non-Existing Customer', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[4];
            cy.forgetPasswordNonExistingCustomer(customerDetailsInfo); 

        });
     

    });

    it('Forget Password of a Invalid Customer Phone', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[1];
            cy.forgetPasswordInvalidCustomer(customerDetailsInfo); 

        });
     

    });

    it('Forget Password For A Customer Phone Number That Does Not Start With 0', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[5];
            cy.forgetPasswordForalidCustomerPhoneThatDoesNotStartWith0(customerDetailsInfo); 

        });
     

    });

});