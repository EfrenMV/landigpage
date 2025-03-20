class Cargar {
    
    constructor() {
        this.p = 0; // Variable para el contador

        document.addEventListener("DOMContentLoaded", () => {
            this.cantidad = document.getElementById("cantidad"); // Acceso a cantidad
            this.inicio();
            this.boton();
         });
    }

    inicio() {
        if (this.p <= 0) {
            this.cantidad.style.display = "none";  
        } else {
            this.cantidad.style.display = "inline"; 
        }
        this.cantidad.textContent = this.p; // Mostrar el valor de p en el elemento
    }

    boton() {
        let botones = document.querySelectorAll(".comprar");

        botones.forEach((boton) => {
            boton.addEventListener("click", () => {
                this.p++;  
                this.inicio();  
            });
        });
    }

}

new Cargar();

//Objetos
const manzana = {
    name: "manzana",
    precio: 20,
  };

  const platano = {
    name: "manzana",
    precio: 20,
  };

  const kiwi = {
    name: "manzana",
    precio: 20,
  };

  const remolacha = {
    name: "manzana",
    precio: 20,
  };
