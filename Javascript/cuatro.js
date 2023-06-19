/**
 * Crea una función que tome dado: const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };
 * devuelva un nuevo objeto con todas las claves del objeto original,
 * pero con los valores convertidos a mayúsculas.
 *
 * Salida esperada
 *  const output2 = { a: 'VALOR1', b: 'VALOR2', c: 'VALOR3' };
 */

const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };

function converToUpper(element){
    let upperElement = element.toUpperCase();
    return upperElement;
}

function upperInput(input){
    Object.keys(input).forEach(function (key, index) {
        let upperString = converToUpper(input[key]);
        input[key] = upperString;
    });
    return input;
}
console.log("Previous Object: ", input2);
console.log("Uppercase Object: ", upperInput(input2));



// Solución

/* function convertirValoresMayusculas(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key].toUpperCase();
    }
  }
  return newObj;
} */
