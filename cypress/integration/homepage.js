describe('Home page', () => {
  it('visits home page & submit form with data', () => {
    console.log('url', process.env.URL)
    console.log('url cypress', Cypress.env('URL'))
    cy.visit(process.env.URL)
    cy.get('form input[name="first_name"]').type('cypress')
    cy.get('form input[name="last_name"]').type('test')
    cy.get('form input[name="email"]').type(`${new Date()}@test.com`)
    cy.pause()
    cy.get('form input[type="submit"]').click()
  })
})
