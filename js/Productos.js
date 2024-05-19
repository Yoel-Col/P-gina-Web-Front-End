//Con esto resuelve todas las peticiones a la api.
function getUrlSpecific(done, id) {
  const ids = id !== null ? "/" + id : "";
  const results = fetch(
    `https://my-json-server.typicode.com/Yoel-Col/prototipo-pagina-web.github.io/products${ids}`
    //`https://my-json-server.typicode.com/SEBASTIANULIBARRI/DiarioDigital/products${ids}`
  );
  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getUrlSpecific((data) => {
  data.forEach((element) => { 
    console.log(element)
    const tarjetaProducto = document.createRange().createContextualFragment(

        `<a class ="nn">
      <figure class="producto p${element.id}" id="${element.id}">
        <img class="producto-img" src="${element.url_img}">
        <figcaption>${element.title}</figcaption>
        <figcaption>$${element.precio}</figcaption>
      </figure>
    </a>`)
    console.log("tarj" , tarjetaProducto);
    document.getElementById("Container").appendChild(tarjetaProducto);

    let productos = document.querySelectorAll(".container>a");
    productos.forEach((element) => {
      element.addEventListener("click", mostrarDescripcion);
    });
  });
}, null);
//Evento asociado al boton que vuelve para atras una vez que se entro a la descripcion de un producto.
document
  .getElementById("button-back")
  .addEventListener("click", ocultarProductoEspecifico);
let botonComprar = document.querySelector(".Comprar");
botonComprar.addEventListener("click", comprar);

function ocultarProductoEspecifico(event) {
  document.querySelector(".container").classList.remove("oculto");
  document.querySelector(".muestra").classList.add("oculto");
  botonComprar.classList.remove("oculto");
}
function mostrarDescripcion(event) {
  let id = this.children[0].id;

  getUrlSpecific((data) => {
    let stock = document.querySelector(".muestra .stock");

    document.querySelector(".muestra img").src = data.url_img;
    document.querySelector(".muestra .titulo").innerHTML = data.title;
    document.querySelector(".muestra .descripcion").innerHTML = data.descripcion;
    document.querySelector(".muestra .precio").innerHTML =
      "Precio: $" + data.precio;
    document.querySelector(".container").classList.add("oculto");
    document.querySelector(".plantilla").classList.remove("oculto");
    if (data.Stock > 0) {
      stock.innerHTML = "Stock: " + data.Stock;
    } else {
      botonComprar.classList.add("oculto");
      stock.innerHTML = "Sin Stock";
    }
  }, id);
}

function comprar() {
  let compra = document.querySelector(".compra");
  compra.classList.toggle("oculto");
  setTimeout(() => {
    compra.classList.toggle("oculto");
  }, 1000);
  console.log('"Se ha comprado el producto"');
}
