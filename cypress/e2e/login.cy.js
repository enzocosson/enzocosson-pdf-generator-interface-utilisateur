describe("Test du formulaire de connexion", () => {
  it("Connexion réussie", () => {
    cy.visit("https://127.0.0.1:8000/login");

    cy.get("#username").type("test@mail.com");
    cy.get("#password").type("test");

    cy.get('button[type="submit"]').click();

    cy.contains("Welcome to PDF Generator").should("exist");
  });

  it("Connexion échouée", () => {
    cy.visit("/login");

    cy.get("#username").type("faux@mail.com");
    cy.get("#password").type("fezdfe");

    cy.get('button[type="submit"]').click();

    cy.contains("Invalid credentials.").should("exist");
  });
});
