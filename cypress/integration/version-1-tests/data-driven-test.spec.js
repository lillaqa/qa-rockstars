/// <reference types="Cypress" />

context("Login data-driven tests", () => {
  beforeEach(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
  });

  describe("unhappy flow", () => {
    it("empty fields should throw an error", () => {
      cy.get("#log-in").click();

      cy.get(".alert.alert-warning").should(
        "have.text",
        "Both Username and Password must be present "
      );
    });

    it("only username should throw an error", () => {
      cy.get("#username").type("username");
      cy.get("#log-in").click();
      cy.get(".alert.alert-warning").should(
        "have.text",
        "Password must be present"
      );
    });

    it("only password should throw an error", () => {
      cy.get("#password").type("password");
      cy.get("#log-in").click();
      cy.get(".alert.alert-warning").should(
        "have.text",
        "Username must be present"
      );
    });
  });

  describe("happy flow", () => {
    it("successful login", () => {
      cy.get("#username").type("username");
      cy.get("#password").type("password");
      cy.get("#log-in").click();
      cy.url().should("include", "/hackathonApp.html");
    });
  });
});
