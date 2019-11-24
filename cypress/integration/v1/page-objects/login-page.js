/// <reference types="Cypress" />

export class LoginPage {
  navigate() {
    cy.visit("https://demo.applitools.com/hackathon.html");
    //cy.visit("https://demo.applitools.com/hackathonV2.html");
  }

  login() {
    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("#log-in").click();
  }
}
