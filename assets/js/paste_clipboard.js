document.addEventListener("DOMContentLoaded", function () {
  const pasteClipboardButton = document.getElementById(
    "paste_clipboard_button"
  );
  const urlInput = document.getElementById("generate_pdf_form_url");

  console.log("pasteClipboardButton:", pasteClipboardButton);
  console.log("urlInput:", urlInput);

  if (pasteClipboardButton && urlInput) {
    pasteClipboardButton.addEventListener("click", function () {
      navigator.clipboard
        .readText()
        .then((text) => {
          // Coller le contenu du presse-papiers dans l'input URL
          urlInput.value = text;
        })
        .catch((err) => {
          console.error("Failed to read clipboard contents: ", err);
        });
    });
  } else {
    console.error(
      "Elements with IDs paste_clipboard_button or generate_pdf_form_url_url not found."
    );
  }

  // Ajouter un écouteur d'événements sur le bouton "Reset"
  const resetButton = document.querySelector('button[type="reset"]');
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      // Réinitialiser la valeur de l'input URL à une chaîne vide
      urlInput.value = "";
    });
  }
});
