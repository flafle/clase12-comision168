const productos = [
    {
        nombre: "zapatillas",
        precio: 20000,
        stock: 5,
        
    },

    {
        nombre: "remeras",
        precio: 1000,
        stock: 7
    },

    {
        nombre: "shorts",
        precio: 1500,
        stock: 10
    }

];
// console.log(productos)


//filter
// let productosMenorPrecio = productos.filter( p => p.precio < 1600);
// console.log(productosMenorPrecio);




//map
 
let productosActualizados = productos.map(p => {
    p.precio += 20;
    return p;

})

//reduce
const nuevosStock = [2, 3, 4];

const resultadoReduce = (acc, item) => acc + item;
console.log(nuevosStock.reduce(resultadoReduce, 2));

//indexOf---> encuentra el indice de un valor del array

const misNumeros = [32, 45, 3, 76];
const resultadoIndexOf = misNumeros.indexOf(3);
console.log(resultadoIndexOf);

//findindex
let misNumeros2 = [23, 34, 5656, 789, 89, 09];
//Se va a encontrar con el primer elemento que cumpla la condicion...
let indice = misNumeros2.findIndex((n) =>{
    return n > 100
}

);
console.log(indice);







