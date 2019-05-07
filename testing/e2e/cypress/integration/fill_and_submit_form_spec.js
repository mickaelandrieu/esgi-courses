const pages = new Map([
    ['Google', 'https://google.com/'],
    ['Facebook', 'https://facebook.com'],
    ['Twitter', 'https://twitter.com'],
]);

for (let [title, link] of pages) {
    describe(`Access ${title}` , function() {
        it(`Visits ${title} page`, function() {
            cy.visit(link);
            cy.screenshot();
        })
    });
}
