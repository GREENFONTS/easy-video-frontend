describe('Navigation', () => {
    it('renders page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('How it Works')

        cy.get('input[type=text]').type('https://youtube.com/watch?v=euhiweheihu')

        cy.get('button[name=searchButton').click()

        cy.get('h2')
      });
})

