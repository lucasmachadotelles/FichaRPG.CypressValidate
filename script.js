document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("jogadorForm");
  const salvarButton = document.getElementById("salvar");
  const mensagem = document.getElementById("mensagem");

  salvarButton.addEventListener("click", function () {
      const requiredFields = document.querySelectorAll(".required");
      let isValid = true;

      requiredFields.forEach(function (field) {
          if (!field.value.trim()) {
              isValid = false;
              field.style.border = "1px solid red";
          } else {
              field.style.border = "1px solid #ccc";
          }
      });

      if (isValid) {
          mensagem.innerHTML = "Ficha preenchida com sucesso.";
          mensagem.className = "success";
          form.reset();
      } else {
          mensagem.innerHTML = "Valide os campos obrigatórios!";
          mensagem.className = "alert";
      }

      mensagem.style.display = "block";
  });
});
