/// <reference types="Cypress" />
import { LoginPage } from "../v1/page-objects/login-page";

describe("canvas chart tests", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
    loginPage.login();
    cy.get("#showExpensesChart").click();
  });

  it("validate button", () => {
    cy.get("button#addDataset").should("have.text", "Show data for next year");
  });
});
