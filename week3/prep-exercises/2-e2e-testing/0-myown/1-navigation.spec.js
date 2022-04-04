/// <reference types="cypress" />

describe("Navigation", () => {
  it("Can go to the details page and back", () => {
    // First visit the page we want to test
    cy.visit("https://hyf-react-w2-example.netlify.app/");

    /**
     * cy.get will be your most used command as it is the way you can interact with the DOM.
     * Have a look at the documentation here: https://docs.cypress.io/api/commands/get
     *
     * Although a lot of that documentation allows you to select things based on classnames/element types/etc.
     * the best practice is to add `data-` properties for selection. This separates the implementation from your tests even more!
     *
     * The `should` part is your assertions and they should look familiar to what you have learned before.
     * Here we are checking that there are 20 products in the list!
     */
    cy.get('[data-testid="product-link"]').should("have.length", 20);

    /**
     * Now let's interact with our page.
     * Note in the line below that we can chain commands on the results of queries.
     * In Cypress a lot can be chained, here we chain the `first` command to select the first element in the list.
     * Then we chain the `click` command to click on that first element.
     */
    cy.get('[data-testid="product-link"]').first().click();

    /**
     * And after clicking we want to be sure that we are on the details page.
     * An easy way to do this is to add a data-testid to the surrounding div of the page and check that it is visible.
     */
    cy.get('[data-testid="product-details-page"]').should("be.visible");

    /**
     * Cypress also offers you ways to interact with the browser.
     * Using the go command we can tell the browser to mimic the user pressing the back button.
     *
     * Have a look at the documentation of this command here: https://docs.cypress.io/api/commands/go
     */
    cy.go("back");

    /**
     * And check that we are in the products page again.
     *
     * Don't forget to do these assertions, Cypress does not care about the console log, so will stay green even if there is an error logged to the console!
     */
    cy.get('[data-testid="products-page"]').should("be.visible");
  });
});
