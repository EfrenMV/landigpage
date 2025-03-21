class Cargar {
    constructor() {
        this.p = 0;  
        this.carrito = [];  //Declaración del areglo

        document.addEventListener("DOMContentLoaded", () => {
            this.cantidad = document.getElementById("cantidad"); 
            this.carritoContainer = document.querySelector(".carrito"); 

            //Para ocultar/Mostrar
            this.inicio();
            this.boton();
            this.mostrarCarrito();
        });
    }

    inicio() {
        if (this.p > 0) {
            this.cantidad.style.display = "inline";
        } else {
            this.cantidad.style.display = "none";
        }

        this.cantidad.textContent = this.p; // Copiamos la cantidad actual (0)
    }

    boton() {
        let botones = document.querySelectorAll(".comprar"); //Boton verde (todos) 

        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => { //Evento de click

                let nombreProducto = e.target.closest(".box_imgv").querySelector(".v_nombre").textContent; //Optiene el nombre 
                let precioProducto = e.target.closest(".box_imgv").querySelector(".precio").textContent.replace("$", ""); //Optiene el precio (quitamos el $ para poder usarlo)

                this.carrito.push({ nombre: nombreProducto, precio: Number(precioProducto) });//Los agregamos al areglo
                
                this.p++; //Se incrementa el numero por el click
                this.inicio(); //Actualiza el numerito
                this.mostrarCarrito(); //Actualiza el carrito
            });
        });
    }

    mostrarCarrito() {
        //Texto del carrito
        this.carritoContainer.innerHTML = "";//Basiamos todo

        if (this.carrito.length === 0) {
            this.carritoContainer.innerHTML = "<p>El carrito está vacío.</p>"; //S agrega un parrafo
        } else {
            let lista = document.createElement("ul"); //Se crea una lista
            let total = 0; //Inicializamos el total

            this.carrito.forEach((producto, index) => {  //recorremos el carrito

                //Hacemos un li para cada producto
                let item = document.createElement("li");
                item.textContent = `${producto.nombre} - $${producto.precio}`;
                item.style.cursor = "pointer"; //Agregamos un style al cursos cuando este arriba

                // Evento al dar click
                item.addEventListener("click", () => 
                    this.eliminarProducto(index)); //evento para eliminar el producto 

                lista.appendChild(item);
                total += producto.precio; //Suma el total de los precios
            });

            let separador = document.createElement("hr"); // Línea separadora
            let totalElemento = document.createElement("p");
            totalElemento.textContent = `Total: $${total}`; //Se escribe el total 

            //Se escriben los siguientes elementos
            this.carritoContainer.appendChild(lista);
            this.carritoContainer.appendChild(separador);
            this.carritoContainer.appendChild(totalElemento);
        }
    }

    eliminarProducto(index) {
        this.carrito.splice(index, 1); // Eliminar producto del array
        this.p--; // Disminuir contador
        this.inicio(); //Comprueba que siga estando > 0
        this.mostrarCarrito(); // Actualizar vista
    }
}

new Cargar();
