/// <reference types="Cypress" />

before(() => {
  cy.visit("https://demo.applitools.com/hackathon.html");
});

it("header should display the correct text", () => {
  cy.get(".auth-header").should("include.text", "Login Form");
});
