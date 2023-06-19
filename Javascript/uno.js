/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
 
*/

const array = ['ab', 'abb', 'abbabbabbaa'];

const sortedArray = [];

function arrangeArray(a){
    for(let i = 0; i < a.length; i++){
        let element = arrangeArrayElement(a[i]);
        sortedArray.push(element);
    }
    sortedArray.sort((a, b) => b.length - a.length);
    return sortedArray;
}
    

function arrangeArrayElement(element){
    let newElement = "";
    let previous = "";
    for (let i = 0; i < element.length; i++){
        if (element[i]!= previous){
            newElement += element[i];
            previous = element[i];
        }
    }
    return newElement;
}

console.log(arrangeArray(array));
