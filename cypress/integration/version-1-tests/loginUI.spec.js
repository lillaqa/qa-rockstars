/// <reference types="Cypress" />

context("Login UI tests", () => {
  before(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
  });

  describe("text assertion tests", () => {
    it("header should display the correct text", () => {
      cy.get(".auth-header").should("include.text", "Login Form");
    });
  });
});
