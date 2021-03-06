/// <reference types="Cypress" />
import { LoginPage } from "../v1/page-objects/login-page";

context("Login data-driven tests", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
    //cy.visit("https://demo.applitools.com/hackathonV2.html");
  });

  describe("the unhappy flow", () => {
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

  describe("the happy flow", () => {
    it("successful login", () => {
      loginPage.login();
      cy.url().should("include", "/hackathonApp.html");
    });
  });
});
