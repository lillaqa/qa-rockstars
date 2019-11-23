/// <reference types="Cypress" />

context("Login UI tests", () => {
  before(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
  });

  describe("text assertion tests", () => {
    it("header should display the correct text", () => {
      cy.get(".auth-header").should("include.text", "Login Form");
    });

    it("username label should be correct", () => {
      cy.get("label").contains("Username");
    });

    it("password label should be correct", () => {
      cy.get("label").contains("Password");
    });

    it("checkbox label should be correct", () => {
      cy.get("label").contains("Remember Me");
    });

    //ToDo: fix this test: element can't be found
    it.skip("username placeholder text should be correct", () => {
      cy.get(".form-control").should("contain", "Enter your username");
    });

    it("login button should have the correct label", () => {
      cy.get("button#log-in").should("have.text", "Log In");
    });
  });
});
