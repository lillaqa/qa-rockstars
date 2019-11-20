/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("https://demo.applitools.com/hackathon.html");
});

it("empty fields should throw an error", () => {
  cy.get("#log-in").click();

  cy.get(".alert.alert-warning").should(
    "have.text",
    "Both Username and Password must be present "
  );
});
