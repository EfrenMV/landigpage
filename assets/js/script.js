class Cargar {
    constructor() {
        this.p = 0;  
        this.carrito = [];  

        document.addEventListener("DOMContentLoaded", () => {
            this.cantidad = document.getElementById("cantidad"); 
            this.carritoContainer = document.querySelector(".carrito"); 

            //Para ocultar/Mostrar
            this.inicio();
            this.boton();
            this.mostrarCarrito();
        });

        document.getElementById("item_bag").addEventListener("click", () => {
            this.mostrarCarrito();  
        });
    }

    inicio() {
        if (this.p > 0) {
            this.cantidad.style.display = "inline";
        } else {
            this.cantidad.style.display = "none";
        }

        this.cantidad.textContent = this.p; // Mostrar la cantidad de productos
    }

    boton() {
        let botones = document.querySelectorAll(".comprar");

        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                let nombreProducto = e.target.closest(".box_imgv").querySelector(".v_nombre").textContent;
                let precioProducto = e.target.closest(".box_imgv").querySelector(".precio").textContent.replace("$", "");

                this.carrito.push({ nombre: nombreProducto, precio: Number(precioProducto) });
                this.p++;
                this.inicio(); //Actualiza el numerito
                this.mostrarCarrito(); //Actualiza el carrito
            });
        });
    }

    mostrarCarrito() {
        //Texto del carrito
        this.carritoContainer.innerHTML = ""; 

        if (this.carrito.length === 0) {
            this.carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            let lista = document.createElement("ul");
            let total = 0;

            this.carrito.forEach((producto, index) => {
                let item = document.createElement("li");
                item.textContent = `${producto.nombre} - $${producto.precio}`;
                item.style.cursor = "pointer";

                // Evento para eliminar
                item.addEventListener("click", () => this.eliminarProducto(index)); 
                lista.appendChild(item);
                total += producto.precio;
            });

            let separador = document.createElement("hr"); // Línea separadora
            let totalElemento = document.createElement("p");
            totalElemento.textContent = `Total: $${total}`;

            this.carritoContainer.appendChild(lista);
            this.carritoContainer.appendChild(separador);
            this.carritoContainer.appendChild(totalElemento);
        }
    }

    eliminarProducto(index) {
        this.carrito.splice(index, 1); // Eliminar producto del array
        this.p--; // Disminuir contador
        this.inicio();
        this.mostrarCarrito(); // Actualizar vista
    }
}

new Cargar();
