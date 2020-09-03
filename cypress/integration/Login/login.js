
Given('I am on the homepage', ()=> {
    cy.visit('http://automationpractice.com/index.php?')
});

And('I click the sign in link', ()=>{
    cy.get('.login').contains('Sign in', {timeout:10000}).click()
    
});

And('I enter email {string} in the email field', (content)=>{
    cy.get('input[id="email"]').type(content)
});

And('I enter password {string} in the password field', (content)=>{
    cy.get('input[id=passwd]').type(content)
});

when('I click the login button I should be logged in', ()=>{
    cy.get('.submit').contains('Sign in').should('be.visible').click()
})