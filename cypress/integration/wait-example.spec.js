describe('Testing cypress', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
        cy.server();
        cy.route('GET', '/test?**').as('getTest');
    })
    
    it('Captures and yeilds both calls', () => {
        cy.get('[id="first"]').click();
        cy.wait('@getTest');
        cy.wait('@getTest');
    })

    it('Fails, the first wait yields the second call (because it completed first?)', () => {
        cy.get('[id="second"]').click();
        cy.wait('@getTest');
        cy.wait('@getTest');
    })
})