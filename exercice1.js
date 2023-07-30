/**
 * Créer ici le projet « Calculaprompt ».
 */

const x = window.prompt("choose a number ?");
const operateurA = window.prompt("choose a artmetic operator(+, /, * , -) )");
const y =window.prompt("choose a second number ?");


const nombre= Number(x);
const secondnombre = Number(y);

let result; 


if (isNaN(nombre) || (isNaN(secondnombre))) {
document.console.error();("you have to choose a number ?.");

}else if
  (operateurA === "+") {

 console.log(nombre + secondnombre);

}else if (operateurA =="/")

{
console.log(nombre / secondnombre);
} 

else if (operateurA=="*")
{ 
    console.log(nombre * secondnombre);
}

else if (operateurA=="-"){

    console.log(nombre - secondnombre);
}

else {
    document.write("The result of calculte is "+ result );
}




 

   
   




