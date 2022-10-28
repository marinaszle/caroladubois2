
let opciones = '';
let carritoProductos = 0;
let carritoProductosFinal = 0;
let precioProducto = 0;
let carrito = '';


producto1 = 'Riñonera';
valorProducto1 = 3500;
precioProducto1 = 0;

producto2 = 'Cartera';
valorProducto2 = 3500;
precioProducto2 = 0;

producto3 = 'Bandolera';
valorProducto3 = 3500;
precioProducto3 = 0;

producto4 = 'Mochila';
valorProducto4 = 3500;
precioProducto4 = 0;


do {
    opciones = prompt('¡Hola! Muchas gracias por visitarnos. Por favor, seleccionar una opcion: \n1. Comprar un producto\n2. Continuar a la pagina');

    switch (opciones) {
        case '1':
            let product = '';
            do {
                product = prompt('¿Qué producto deseas comprar?\n1. Producto: ' + producto1 + ' - Precio: ' + valorProducto1 + ' ARS\n2. Producto: ' + producto2 + ' - Precio: ' + valorProducto2 + ' ARS\n3. Producto: ' + producto3 + ' - Precio: ' + valorProducto3 + ' ARS\n4. Producto: ' + producto4 + ' - Precio: ' + valorProducto4 + ' ARS\n5. Regresar');

                switch (product) {
                    case '1':
                        precioProducto = getprecioProducto();
                        buyProduct(valorProducto1, precioProducto);
                        getProductsInShoppingCar(producto1, precioProducto);
                        alert('Total compra: ' + carritoProductosFinal + '\nCantidad de productos en el carrito de compras: ' + carritoProductos + '\nDetalle: ' + carrito);
                        break;
                    case '2':
                        precioProducto = getprecioProducto();
                        buyProduct(valorProducto2, precioProducto);
                        getProductsInShoppingCar(producto2, precioProducto);
                        alert('Total compra: ' + carritoProductosFinal + '\nCantidad de productos en el carrito de compras: ' + carritoProductos + '\nDetalle: ' + carrito);
                        break;
                    case '3':
                        precioProducto = getprecioProducto();
                        buyProduct(valorProducto3, precioProducto);
                        getProductsInShoppingCar(producto3, precioProducto);
                        alert('Total compra: ' + carritoProductosFinal + '\nCantidad de productos en el carrito de compras: ' + carritoProductos + '\nDetalle: ' + carrito);
                        break;
                    case '4':
                        precioProducto = getprecioProducto();
                        buyProduct(valorProducto4, precioProducto);
                        getProductsInShoppingCar(producto4, precioProducto);
                        alert('Total compra: ' + carritoProductosFinal + '\nCantidad de productos en el carrito de compras: ' + carritoProductos + '\nDetalle: ' + carrito);
                        break;
                    case '5':
                        break;
                    default:
                        alert('Seleccione una opción válida: 1 - 5');
                        break;
                }
            } while (product != '5');
            break;
        case '2':
            break;
        default:
            alert('Seleccione una opción válida: 1 - 2');
            break;
    }
} while (opciones != '2');

function buyProduct(valorProducto, precioProducto) {
    carritoProductosFinal += valorProducto * precioProducto;
    carritoProductos += precioProducto;
}

function getprecioProducto() {
    let precioProductoInput = parseInt(prompt('Por favor ingrese la cantidad a comprar del producto seleccionado:'));
    
    while (precioProductoInput <= 0 || isNaN(precioProductoInput)) {
        precioProductoInput = parseInt(prompt('Por favor ingrese una cantidad válida:'));
    }

    if (precioProductoInput > 0) {
        return precioProductoInput;
    }
}

function getProductsInShoppingCar(nombreProducto, precioProducto) {
    return carrito += '\n' + nombreProducto + ' - Cantidad: ' + precioProducto;
}

