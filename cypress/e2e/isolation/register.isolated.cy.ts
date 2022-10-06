import { getRandomString, getRandomEmail } from "../../util/random"

describe('Register page tests in isolation', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('should successfully register', () => {

        cy.intercept('POST', '**/users/signup', {
            statusCode: 201,
            body: {
                token: 'fakeToken'
            }
        })

        cy.get('[name=username]').type(getRandomString())
        cy.get('[name=firstName]').type(getRandomString())
        cy.get('[name=lastName]').type(getRandomString())
        cy.get('[name=email]').type(getRandomEmail())
        cy.get('[name=password]').type(getRandomString())
        cy.get('.btn-primary').click();

        cy.get('.alert-success').should('have.text', 'Registration successful')
        cy.url().should('contain', '/login')
    })

})