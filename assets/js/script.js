class Cargar {
    constructor() {
        this.p = 0; // Contador de productos en el carrito
        this.carrito = []; // Lista de productos en el carrito

        document.addEventListener("DOMContentLoaded", () => {
            this.cantidad = document.getElementById("cantidad"); // Contador en el ícono del carrito
            this.carritoContainer = document.querySelector(".carrito"); // Div donde se muestra el carrito
            this.inicio();
            this.boton();
            this.mostrarCarrito();
        });

        document.getElementById("item_bag").addEventListener("click", () => {
            this.mostrarCarrito(); // Mostrar contenido al hacer clic en el carrito
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
                this.inicio();
                this.mostrarCarrito();
            });
        });
    }

    mostrarCarrito() {
        this.carritoContainer.innerHTML = ""; // Limpiar antes de actualizar

        if (this.carrito.length === 0) {
            this.carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            let lista = document.createElement("ul");
            let total = 0;

            this.carrito.forEach((producto, index) => {
                let item = document.createElement("li");
                item.textContent = `${producto.nombre} - $${producto.precio}`;
                item.style.cursor = "pointer";
                item.addEventListener("click", () => this.eliminarProducto(index)); // Evento para eliminar
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
