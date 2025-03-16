describe('Login Screen', () =>{

    it('Login Using valid Phone Number and Valid Password', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[0];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.validLoginFlow(customerDetailsInfo);
            


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
        });
     

    });

    it('Login Using invalid Phone Number and Valid Password', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[1];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.invalidPhoneValidPassword(customerDetailsInfo);


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
        });
     

    });

    it('Login Using invalid Phone Number and invalid Password', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[2];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.invalidPhoneInvalidPassword(customerDetailsInfo);


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
        });
     

    });

    it('Login Using blank Phone Number and valid Password', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[3];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.blankPhonevalidPassword(customerDetailsInfo);


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
        });
     

    });


    it('Login Using valid Phone Number and blank Password', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[4];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.validPhoneblankPassword(customerDetailsInfo);


            // cy.get('#username').type(customerDetailsInfo.validPhone);
            // cy.get('#password').type(customerDetailsInfo.validPassword);
            // cy.get('.btn').click();

            //For File upload
            //cy.get('File Upload Elemet').selectFile(userData.filePath);
        });
     

    });
});