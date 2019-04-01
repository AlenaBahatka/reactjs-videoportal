describe('Videoportal test', () => {
    it('visit the site', () => {
        cy.visit('http://localhost:8080/');
    })
    it('contains all needed elements', () => {
        cy.contains('Search by');
        cy.contains('Sort by');
        cy.contains('TITLE');
        cy.contains('GENRE');
        cy.contains('RELEASE DATE');
        cy.contains('RATING');
        cy.contains('Search');
        cy.contains('netflixroulette');
    })

    it('Genre is clickable', () => {
        cy.contains('GENRE').click();
    })

    it('Check search input field', () => {
        cy.get('#searchInput').type('drama').should('have.value', 'drama')
    })
})