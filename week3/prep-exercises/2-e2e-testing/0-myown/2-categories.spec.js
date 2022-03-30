/// <reference types="cypress" />

describe("Categories", () => {
  /**
   * Just like in jest we can tell Cypress to do something before every 'it' test.
   *
   * This time we want to start every test with a fresh page, so let's visit the page again before every test.
   */
  beforeEach(() => {
    cy.visit("https://hyf-react-w2-example.netlify.app/");
  });

  it("Starts with no categories selected", () => {
    /**
     * Sometimes you want to isolate a part of the page for your queries and assertions.
     * To do that you can use the `within` command that will do whatever callback function you give inside of that element.
     */
    cy.get('[data-testid="categories-list"]').within(() => {
      // Let's first check that there are 4 categories!
      cy.get('[data-testid="category-item"]').should("have.length", 4);

      // Now let's check that none of them are selected. To do this we added a data-selected property to our DOM.
      cy.get('[data-selected="false"]').should("have.length", 4);
    });
  });

  it("Selecting a category should filter the list", () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      // Check that none are selected
      cy.get('[data-selected="false"]').should("have.length", 4);
    });

    // Get a baseline check that we have 20 products
    cy.get('[data-testid="product-link"]').should("have.length", 20);

    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-elementid="electronics"]').click();

      // Check that the category is selected
      cy.get('[data-selected="true"]').should("have.length", 1);
      cy.get('[data-selected="false"]').should("have.length", 3);
    });

    // Now we should only have 6!
    cy.get('[data-testid="product-link"]').should("have.length", 6);
  });

  it("Selecting a new category should deselect the old one", () => {
    /**
     * Time for you to write your first test!!
     *
     * We will give you a couple of steps here, this does not mean that every step is 1 line of code!
     */
    // 1. Check that no category is selected
    // 2. Click a category
    // 3. Check that that category is selected
    // 4. Click a different category
    // 5. Check that only the new category is selected
  });
});
