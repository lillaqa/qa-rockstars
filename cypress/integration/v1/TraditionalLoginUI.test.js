/// <reference types="Cypress" />

context("Login UI tests", () => {
  before(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
    //cy.visit("https://demo.applitools.com/hackathonV2.html");
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

    it("username placeholder text should be correct", () => {
      cy.get("input#username.form-control").should(
        "have.attr",
        "placeholder",
        "Enter your username"
      );
    });

    it("password placeholder text should be correct", () => {
      cy.get("input#password.form-control").should(
        "have.attr",
        "placeholder",
        "Enter your password"
      );
    });

    it("login button should have the correct label", () => {
      cy.get("button#log-in").should("have.text", "Log In");
    });
  });
});
