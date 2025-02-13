describe('Sign-up Flow', () =>{

    it('Sign-up With Existing Customer', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.signUpWithExistingCustomer(customerDetailsInfo);


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
        });
     

    });

});