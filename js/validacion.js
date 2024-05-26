document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const name = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("mail");
  const dni = document.getElementById("dni");
  const warnings = document.getElementById("warnings");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    let messages = ""; 

    const regExpDNI = /^\d{8}$/gm;
    const dniOK = regExpDNI.test(dni.value);

    if (name.value.trim().length < 6) {
      messages += "Nombre: Debe tener al menos 6 caracteres. <br>";
      isValid = false;
    }

    if (apellido.value.trim().length < 6) {
      messages += "Apellido: Debe tener al menos 6 caracteres. <br>";
      isValid = false;
    }

    if (!dniOK) {
      messages += "DNI: Debe tener exactamente 8 dígitos. <br>";
      isValid = false;
    }

    if (!email.validity.valid) {
      messages += "Email: Debe ser una dirección de correo válida. <br>";
      isValid = false;
    }

    if (!isValid) {
      warnings.innerHTML = messages;
    } else {
      warnings.innerHTML = "REGISTRO EXITOSO";
      form.reset();
    }
  });
});
