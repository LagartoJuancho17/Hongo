let subtotalVal = 0; // Subtotal inicial
let inCarrito = []; // Array para almacenar productos en el carrito
const cartContainer = document.getElementById('cart-container');

// Array de tamaños disponibles
const sizes = ["39MM", "40MM", "41MM", "42MM", "45MM"];
// Array de productos para la galeria!!!
const productos = [
    { nombre: "Chrono Camuflado Black", imagen: "./assets/images/GalleryImagenes/RelojGallery2.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery2.jpg", precio: 1500, color: "black", stars: 5, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Chrono Black", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.webp", precio: 2000, color: "black", stars: 4, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Chrono Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery3.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery3.jpg", precio: 4500, color: "rosegold", stars: 5, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Gunmetal Black Tan", imagen: "./assets/images/GalleryImagenes/RelojGallery4.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery4.webp", precio: 1800, color: "golden", stars: 3, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Leather Gray Belt", imagen: "./assets/images/GalleryImagenes/RelojGallery5.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery5.jpg", precio: 2000, color: "silver", stars: 2, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Bristol Silver Link", imagen: "./assets/images/GalleryImagenes/RelojGallery6.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery6.webp", precio: 7000, color: "silver", stars: 4, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Bourbon 360 Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery7.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery7.jpg", precio: 3750, color: "green", stars: 5, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Bristol Rose Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery8.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery8.jpg", precio: 4200, color: "rosegold", stars: 4, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Bristol Gold Link", imagen: "./assets/images/GalleryImagenes/RelojGallery9.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery9.jpg", precio: 2800, color: "green", stars: 3, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Blue Sky", imagen: "./assets/images/GalleryImagenes/RelojGallery10.0.jpg", imagenHover: "./assets/images/GalleryImagenes/RelojGallery10.jpg", precio: 1000, color: "blue", stars: 2, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Bourbon Silver", imagen: "./assets/images/GalleryImagenes/RelojGallery11.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery11.webp", precio: 6500, color: "brown", stars: 5, size: sizes[Math.floor(Math.random() * sizes.length)] },
    { nombre: "Chrono Rouse Gold", imagen: "./assets/images/GalleryImagenes/RelojGallery1.0.webp", imagenHover: "./assets/images/GalleryImagenes/RelojGallery1.webp", precio: 2300, color: "brown", stars: 3, size: sizes[Math.floor(Math.random() * sizes.length)] },
];

// Selecciona el contenedor de la galería
function cargarGaleriaDeFotos() {
    const contenedorGallery = document.querySelector('.contenedor-gallery');
    if (contenedorGallery) {
        productos.forEach(producto => {
            const articulo = document.createElement('article');
            articulo.classList.add('articulo', 'gallery-item'); // Agregar clase específica para la galería
            articulo.innerHTML = `
                <img src="${producto.imagen}" class="w100 product-image" alt="${producto.nombre}">
                <h3 class="myriad rem1">${producto.nombre}</h3>
                <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
                <div class="add-text"><button onclick="carrito(${productos.indexOf(producto)})" class = "addcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
            `;
            contenedorGallery.appendChild(articulo);

            const imgElement = articulo.querySelector('.product-image');

            // Eventos para cambiar la imagen al pasar el mouse
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });

            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });
        });
    }
}
cargarGaleriaDeFotos();
console.log("El boton esta funcionando padre")

function gallery4() {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        productos.slice(0, 4).forEach((producto, index) => {
            // Crea una nueva seccion para el producto
            const sectionProducto = document.createElement('section');
            sectionProducto.classList.add('gallery-4-cards', 'pos-relative');
            sectionProducto.id = `div${index + 1}`; //le pone los divs de la gallery4

            // Agrega los productos
            sectionProducto.innerHTML = `
                <img src="${producto.imagen}" class="w100 product-image" alt="${producto.nombre}">
                <h3 class="myriad rem1">${producto.nombre}</h3>
                <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
                <div class="add-text">
                    <button onclick="carrito(${index})" class="addcart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            `;

            // mete la seccion al contenedor
            galleryContainer.appendChild(sectionProducto);

            // efecto hover
            const imgElement = sectionProducto.querySelector('.product-image');
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });
            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });
        });

        // css para la galeria (no funciona todavia)
        const div3 = document.getElementById('div3');
        if (div3) {
            div3.style.gridColumn = 'span 2';
            div3.style.gridRow = 'span 2';
        }

        const div4 = document.getElementById('div4');
        if (div4) {
            div4.style.gridColumn = 'span 2';
            div4.style.transform = 'rotate(180deg)';
        }
    }
}


gallery4();

function changeColumns(columns) {
    const productGrid = document.getElementById("productGrid");
    productGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function bannerMovimiento() {
    const bannerSection = document.querySelector('.banner');
    // Verificar si existe el elemento con la clase .banner
    if (bannerSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Dejar de observar después de la primera vez
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(bannerSection);
    }
}

// Llamar a la función para iniciar el proceso
bannerMovimiento();

/*NAVBAR DESAPARECEE!!! */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > lastScrollY) {
        // Si el usuario hace scroll hacia abajo, oculta el navbar
        navbar.classList.add("hidden");
    } else {
        // Si el usuario hace scroll hacia arriba, muestra el navbar y cambia su color a negro
        navbar.classList.remove("hidden");
        navbar.classList.add("black");
    }

    // Actualiza la posición del último scroll
    lastScrollY = window.scrollY;

    // Si está en la parte superior de la página, vuelve al color original
    if (window.scrollY <= 0) {
        navbar.classList.remove("black");
    }
});

// Seleccionar el contenedor donde se agregarán los productos
const contenedorGalleryShop = document.getElementById('productGrid');
// Add this function to handle filtering by price range
function mostrarProductos(colorSeleccionado = null, minPrice = 0, maxPrice = 7000, sizeSeleccionado = null) {
    contenedorGalleryShop.innerHTML = ""; // Clear the container before displaying filtered products

    productos.forEach(producto => {
        if (
            (colorSeleccionado === null || producto.color === colorSeleccionado) &&
            producto.precio >= minPrice &&
            producto.precio <= maxPrice &&
            (sizeSeleccionado === null || producto.size === sizeSeleccionado)
        ) {
            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    $${producto.precio}
                </div>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
            `;

            const imgElement = articulo.querySelector('.product-image');
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });
            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });

            contenedorGalleryShop.appendChild(articulo);
        }
    });
}

function resetGallery() {
    // Clear any selected color filters
    const colorRadios = document.querySelectorAll('input[name="color"]');
    colorRadios.forEach(radio => radio.checked = false);

    // Load all products
    mostrarProductos();
}

// Filtros!!!
document.addEventListener('DOMContentLoaded', function () {
    const starFilter = document.getElementById('starFilter');
    const minSlider = document.getElementById('min');
    const maxSlider = document.getElementById('max');
    const outputMin = document.getElementById('min-value');
    const outputMax = document.getElementById('max-value');
    const colorRadios = document.querySelectorAll('input[name="color"]');
    let selectedStars = null;

    // Update products based on filters
    function updateProducts() {
        const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
        const sizeSeleccionado = document.querySelector('input[name="size"]:checked')?.value || null;
        const minPrice = parseInt(minSlider.value) || 0;
        const maxPrice = parseInt(maxSlider.value) || 7000;

        mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado, selectedStars);
    }

    // star filter
    starFilter.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target.tagName === 'SPAN' && target.dataset.value) {
            const clickedStars = parseInt(target.dataset.value);
    
            
            if (selectedStars === clickedStars) {
                selectedStars = null; 
            } else {
                selectedStars = clickedStars; 
            }
    
            
            document.querySelectorAll('#starFilter span').forEach((star) => {
                const starValue = parseInt(star.dataset.value); 
                if (starValue <= selectedStars) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
    
            // Update the product display
            updateProducts();
        }
    });
    // Event listener for slider changes
    minSlider.addEventListener('input', () => {
        if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
            minSlider.value = maxSlider.value;
        }
        outputMin.innerHTML = minSlider.value;
        updateProducts();
    });

    maxSlider.addEventListener('input', () => {
        if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
            maxSlider.value = minSlider.value;
        }
        outputMax.innerHTML = maxSlider.value;
        updateProducts();
    });

    // Event listener for color filters
    colorRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateProducts();
        });
    });

    // Load default products on page load
    mostrarProductos();
});

function mostrarProductos(colorSeleccionado = null, minPrice = 0, maxPrice = 7000, sizeSeleccionado = null, selectedStars = null) {
    contenedorGalleryShop.innerHTML = ""; // Clear the container before applying filters

    productos.forEach(producto => {
        if (
            (colorSeleccionado === null || producto.color === colorSeleccionado) &&
            producto.precio >= minPrice &&
            producto.precio <= maxPrice &&
            (sizeSeleccionado === null || producto.size === sizeSeleccionado) &&
            (selectedStars === null || producto.stars === selectedStars) // Filter by exact stars
        ) {
            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    $${producto.precio}
                </div>
                <p class="flex-center myriad rem1 color-gris">Size: ${producto.size}</p>
                <p class="flex-center myriad rem1 color-gris">Rating: ${'★'.repeat(producto.stars)}</p>
            `;

            const imgElement = articulo.querySelector('.product-image');
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });
            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });

            contenedorGalleryShop.appendChild(articulo);
        }
    });
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}

document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');

        if (this.getAttribute('data-tab') === 'additional-info') {
            document.querySelector('.image-content').style.display = 'none';
        } else {
            document.querySelector('.image-content').style.display = 'flex';
        }
    });
});

//SHOPPING CART

document.getElementById('toggleCartButton').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open'); // es la clase para desplegarlo
});

function carrito(meter) {
    const subtotalElement = document.getElementById("subtotal");
    const carro = document.getElementById("carro");
    const producto = productos[meter];

    cartContainer.classList.toggle('open');

    // si el producto ya esta en el carrito
    const existingItem = Array.from(carro.children).find(li => {
        const nombre = li.querySelector('p').textContent;
        return nombre === producto.nombre;
    });

    if (existingItem) {
        // x si agregan otro todavia no se como poner cant
        alert("Este producto ya está en el carrito.");
        return;
    }

    // meter el producto
    let li = document.createElement("li");
    let contenedor = document.createElement("figure");
    let imgLink = document.createElement("a");
    let imagen = document.createElement("img");
    let cap = document.createElement("figcaption");
    let nombre = document.createElement("p");
    let precio = document.createElement("p");
    let removerLink = document.createElement("button");

    // informacion
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    nombre.textContent = producto.nombre;
    precio.textContent = `$${producto.precio}`;
    removerLink.textContent = "Remover";

    // boton para sacar items
    removerLink.addEventListener("click", function () {
        carro.removeChild(li);
        subtotalVal -= producto.precio; // actualizar el total
        subtotalElement.textContent = subtotalVal.toFixed(2); // mostrar el total
    });

    
    carro.appendChild(li);
    li.appendChild(contenedor);
    contenedor.appendChild(imgLink);
    imgLink.appendChild(imagen);
    contenedor.appendChild(cap);
    cap.appendChild(nombre);
    cap.appendChild(precio);
    cap.appendChild(removerLink);

    
    subtotalVal += producto.precio; // actualizar el total
    subtotalElement.textContent = subtotalVal.toFixed(2); 
}

/*dark mode*/

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; //si current es dark entonces el newtheme es light y sino viceversa
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    
    document.querySelectorAll(".accordion-content").forEach((el) => {
        el.style.display = "none";
        el.previousElementSibling.textContent = el.previousElementSibling.textContent.replace("-", "+");
    });

// Toggle the current section
    if (!isOpen) {
        content.style.display = "block";
        button.textContent = button.textContent.replace("+", "-");
    }
}

function actualizarFiltro() {
    const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;
    const minPrice = parseInt(document.getElementById('min').value);
    const maxPrice = parseInt(document.getElementById('max').value);
    const sizeSeleccionado = document.querySelector('input[name="size"]:checked')?.value || null;

    mostrarProductos(colorSeleccionado, minPrice, maxPrice, sizeSeleccionado);
}