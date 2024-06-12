describe("Test du formulaire d'inscription", () => {
  it("Inscription réussie", () => {
    cy.visit("https://127.0.0.1:8000/login");

    cy.get("#registration_form_email").type("test.cypress@mail.com");
    cy.get("#registration_form_plainPassword").type("cypress");
    cy.get("#registration_form_firstName").type("John");
    cy.get("#registration_form_lastName").type("Doe");
    cy.get("#registration_form_agreeTerms").check().should("be.checked");

    cy.get('button[type="submit"]').click();

    cy.contains("Welcome to PDF Generator").should("exist");
  });

  it("Inscription échouée", () => {
    cy.visit("https://127.0.0.1:8000/login");

    cy.get("#registration_form_email").type("test@mail.com");
    cy.get("#registration_form_plainPassword").type("cypress");
    cy.get("#registration_form_firstName").type("John");
    cy.get("#registration_form_lastName").type("Doe");
    cy.get("#registration_form_agreeTerms").check().should("be.checked");

    cy.get('button[type="submit"]').click();

    cy.contains("There is already an account with this email").should("exist");
  });
});
