/// <reference types="Cypress" />
import { LoginPage } from "../v1/page-objects/login-page";

context("Table sorting tests", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://demo.applitools.com/hackathon.html");
    loginPage.login();
  });

  describe("testing the default view", () => {});
});
