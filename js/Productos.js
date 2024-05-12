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
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let a = document.createElement("a");
    let p = document.createElement("p");
    let figcaption = document.createElement("figcaption");
    let precio = document.createElement("figcaption");
    //pogo el titulo de la img
    figcaption.innerHTML = element.title;
    //pogo el precio de la img
    precio.innerHTML = "$" + element.precio;
    //agrego la clase para poder formatear desde CSS
    img.classList.add("producto-img");
    //apunto a la imagen que esta localizada en la carpeta del proyecto pero guardada en la api
    img.src = element.url_img;
    //agrego la clase para poder formatear desde CSS
    figure.classList.add("producto");
    figure.classList.add("p" + element.id);
    //agrego el ID paara poder mostrar una descripcion unica del producto
    figure.id = element.id;
    //agrego los hijos dentro de figura para crear la tarjeta
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(precio);
    //meto todo dentro de una etiqueta a para poder darle el salto a otra pagina (en este momento lo muestra dentro de la misma pagina pero la idea original era cambiar de pagina.)
    a.appendChild(figure);
    //lo agrego al DOM para verlo desde la pagina html
    document.getElementById("Container").appendChild(a);
    //creo un eventListener para todas las tarjetas que se agregaron en la linea anterior y poder mostrar una descripcion cuando sea necesario
    var productos = document.querySelectorAll(".container>a");
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
    document.querySelector(".muestra .descripcion").innerHTML =
      data.descripcion;
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
