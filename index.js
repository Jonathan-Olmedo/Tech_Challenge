//Arreglo plano
let arrayPlane = [];
//funcion que recorre cada elemento del arreglo y verificar si tiene o no un arreglo dentro
const arrayPlaneIntegers = (arr) => {
  arr.forEach((e) => {
    //si el elemento no es un arreglo hace push a un nuevo arreglo
    if (Array.isArray(e) == false) {
      //Si existe el elemento en el arreglo ya aplanado lo omite
      if (!arrayPlane.includes(e)) {
        arrayPlane.push(e);
      }
    }
    //si es un arreglo vuelve a ejecutar la funcion hasta hacer push a cada elemento
    else {
      arrayPlaneIntegers(e);
    }
  });
};
//funcion a ejecutar inicialmente que nos muestra el resultado
const arrayIntegers = (arr) => {
  if (Array.isArray(arr) == true) {
    if (arr.length == 0) {
        throw Error('array vacio');
    } else {
      //agrega cada areglo anidado a uno nuevo plano
      arrayPlaneIntegers(arr);
      arrayPlane.forEach((e) => {
        //verifica el tipo de elemento del arreglo plano
        if (
          typeof e == "string" ||
          e == " " ||
          Number.isInteger(e) == false ||
          typeof e == undefined
        ) {
          throw Error('tipo de dato invalido');
        }
      });
      console.log(arrayPlane.sort(function(a, b){return a - b}))
      return arrayPlane.sort(function(a, b){return a - b});
    }
  } else {
    throw Error('no es un array'); 
  }
};
module.exports = {
  arrayIntegers: arrayIntegers,
};
