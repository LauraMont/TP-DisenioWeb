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
  