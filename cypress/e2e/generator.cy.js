describe("Test de génération de PDF", () => {
  it("Génération réussie", () => {
    cy.visit("https://127.0.0.1:8000/login");

    cy.get("#username").type("test@mail.com");
    cy.get("#password").type("test");

    cy.get('button[type="submit"]').click();

    cy.contains("Welcome to PDF Generator").should("exist");

    cy.visit("/generate/pdf");

    cy.get("#generate_pdf_form_pdfName").type("cypress");
    cy.get("#generate_pdf_form_url").type(
      "https://docs.cypress.io/guides/overview/why-cypress"
    );

    cy.get('button[type="submit"]').click();

    cy.get('embed[type="application/pdf"]').should("exist");

    cy.get('embed[type="application/pdf"]')
      .should("have.attr", "src")
      .and("include", "cypress");
  });
});
