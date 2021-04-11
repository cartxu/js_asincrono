const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');

// Función que hace la suma
const sumar = (a,b,cb) =>{
    const result = a + b;
    cb(result);
}

// Función que hace la resta
const restar = (a,b,cb) => {
    const result = a - b;
    cb(result);
}

// Función que multiplica
const multiplicar = (a,b,cb) => {
    const result = a * b;
    cb(result);
}

// Función que divide
const dividir = (a,b,cb) => {
    const result = a / b;
    cb(result);
}

// Función resto
const resto = (a,b,cb) => {
    const result = a % b;
    cb(result);
}

// Función que pinta el resultado
const pintarResultado = result => {
    document.querySelector('#resultado').innerHTML = result;
}


// eventos que escuchan el click en cada botón y llaman a la función correspondiente 
document.querySelector('#sumar').addEventListener('click', () => {
    const a = +aInput.value;
    const b = +bInput.value;
    sumar(a,b,pintarResultado);
})

document.querySelector('#restar').addEventListener('click', () => {
    const a = +aInput.value;
    const b = +bInput.value;
    restar(a,b,pintarResultado);
})

document.getElementById('multiplica').addEventListener('click', () => {
    const a = +aInput.value;
    const b = +bInput.value;
    multiplicar(a,b,pintarResultado);
})

document.getElementById('divide').addEventListener('click', () => {
    const a = +aInput.value;
    const b = +bInput.value;
    dividir(a,b,pintarResultado);
})

document.getElementById('resto').addEventListener('click', () => {
    const a = +aInput.value;
    const b = +bInput.value;
    resto(a,b,pintarResultado);
})