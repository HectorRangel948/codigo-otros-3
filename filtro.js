// Tenemos un li de productos

const productos = [ //crea una colección de arreglos
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


const li = document.getElementsByName("lista-de-productos") // intenta obtener el elemento por su nombre, pero no va a funcionar porque ese elemento es un id
const $i = document.querySelector('.input'); //intenta obtener la etiqueta input pero querySelector no funcionara aparte de que está usando .input que es para clases, deberia usar getElementsByTagName("input")

for (let i = 0; i < productos.length; i++) { //crea un ciclo for que compara con la longitud del arreglo
  var d = document.createElement("div") //crea un elemento div
  d.classList.add("producto") //le agrega una clase llamada producto al div

  var ti = document.createElement("p") //crea un elemento p
  ti.classList.add("titulo") //le agrega una clase titulo al elemento p
  ti.textContent = productos[i].nombre //a la variable ti le pone el nombre del producto del índice i de la coleccion productos
  
  var imagen = document.createElement("img"); //crea un elemento de imagen
  imagen.setAttribute('src', productos[i].img); //le añade un atributo src y le agrega la información que contiene el valor img de la colleción del índice i

  d.appendChild(ti) //incrusta el elemento ti a d
  d.appendChild(imagen) //incrusta el elmento imagen a d

  li.appendChild(d) //incrusta el elemento d a li
}

displayProductos(productos) //invoca a la función displayProductos con productos como parámetro
const botonDeFiltro = document.querySelector("button"); //obtiene el elemento button

botonDeFiltro.onclick = function() { //agrega la función cuando se le da click al elemento button
  while (li.firstChild) { //si hay un elemento hijo lo remueve
    li.removeChild(li.firstChild);
  }

  const texto = $i.value; //intentó incrustar el valor de i con una plantilla pero olvidó las llaves {} y las backticks
  console.log(texto);//imprime el valor de texto en la consola
  const productosFiltrados = filtrado(productos, texto ); //invoca a la función filtrado y le pone como parámetros productos y texto

  for (let i = 0; i < productosFiltrados.length; i++) { //hace un ciclo for usando la longitud de productosFiltrados
    var d = document.createElement("div") //crea un elemento div
    d.classList.add("producto") //le asigna una clase producto
  
    var ti = document.createElement("p") //crea un elemento p
    ti.classList.add("titulo") //le asigna una clase titulo
    ti.textContent = productosFiltrados[i].nombre //le agrega el valor del nombre del elemento de productosFiltrados en el índice i a la varibale ti
    
    var imagen = document.createElement("img"); //crea un elemento img
    imagen.setAttribute('src', productosFiltrados[i].img); //le agrega el valor de img del elmento en el índice i de productosFiltrados al atributo src de imagen
  
    d.appendChild(ti) //incrusta ti en d
    d.appendChild(imagen) //incrusta imagen en d
  
    li.appendChild(d) //incrusta d en li
  }
}

const filtrado = (productos = [], texto) => { //asigna el valor devuelto por la función flecha a la constante filtrado. 
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

//toma como parámetros un arreglo llamado productos y una variable llamada texto
//llama a productos y la función filter que evalua el texto o el color para devolver un resultado