$(document).ready(function() {
    // Datos de ejemplo de productos
    var products = [
      {
        name: "Café en grano",
        image: "producto1.jpg",
        description: "Descripción del café en grano"
      },
      {
        name: "Cafeteras",
        image: "producto2.jpg",
        description: "Descripción de las cafeteras"
      },
      // Agrega más productos según sea necesario
    ];
  
    // Agrega los productos al catálogo
    $.each(products, function(index, product) {
      var productHtml = `
        <div class="col-lg-4 col-md-6">
          <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
          </div>
        </div>
      `;
      $("#productList").append(productHtml);
    });
  });
  
// Función para validar el formulario de contacto
function validateContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Validar que el campo de nombre y apellido no esté vacío
  if (nameInput.value.trim() === '') {
    alert('Por favor, ingresa tu nombre y apellido');
    return false;
  }

  // Validar que el campo de teléfono contenga solo números
  if (!/^[0-9]+$/.test(phoneInput.value)) {
    alert('Por favor, ingresa un número de teléfono válido');
    return false;
  }

  // Validar que el campo de correo electrónico tenga el formato adecuado
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida');
    return false;
  }

  // Validar que el campo de mensaje no esté vacío
  if (messageInput.value.trim() === '') {
    alert('Por favor, ingresa tu mensaje');
    return false;
  }

  // Si todos los campos son válidos, el formulario se envía
  return true;
}

// Escuchar el evento de envío del formulario
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  if (validateContactForm()) {
    // Aquí puedes agregar el código para enviar el formulario
    // por ejemplo, utilizando AJAX o enviándolo a un servidor
    alert('Formulario enviado correctamente');
    contactForm.reset(); // Limpiar el formulario después de enviarlo
  }
});
