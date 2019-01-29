const pages = new Map([
    ['Home', 'https://example.cypress.io/'],
    ['Querying', 'https://example.cypress.io/commands/querying'],
    ['Traversal', 'https://example.cypress.io/commands/traversal'],
    ['Actions', 'https://example.cypress.io/commands/actions'],
    ['Window', 'https://example.cypress.io/commands/window'],
    ['Cypress API', 'https://example.cypress.io/cypress-api'],
    ['Utilities', 'https://example.cypress.io/utilities']
]);

describe('Smoke testing suite', function(){
    for (let [title, link] of pages) {
        it(`Visits ${title} page`, function() {
            cy.visit(link);
        })
    }
});
