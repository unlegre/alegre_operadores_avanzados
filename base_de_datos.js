                // Base de Datos Estatica
 
 // Desestruccturacion de objetos
 const usuario_uno = {
    apellido_1: "lopez",
    nombre_1 : "pepe",
    edad_1: 52, 
};
let{apellido_1,nombre_1,edad_1} =usuario_uno; 

console.log(apellido_1,nombre_1,edad_1); 

 // Desestruccturacion de objetos
 const usuario_dos = {
    apellido_2: "Gomez",
    nombre_2 : "pedro",
    edad_2: 37, 
};
let{apellido_2,nombre_2,edad_2} =usuario_dos; 
console.log(apellido_2,nombre_2,edad_2); 

 // Desestruccturacion de objetos
 const usuario_tres = {
    apellido_3: "Ramirez",
    nombre_3 : "Raul",
    edad_3: 23, 
};
let{apellido_3,nombre_3,edad_3} =usuario_tres; 
console.log(apellido_3,nombre_3,edad_3); 

 // Desestruccturacion arreglos
 let lista_montos =[ "5 mil", "10 mil", "50 mil"," 100 mil"];

 let tipos_cuotas  =["1 cuota ","3 cuotas","6  cuotas", "12  cuotas"];

 let [cuota_1,cuota_3,cuota_6,cuota_12]= tipos_cuotas;
 
 console.log(cuota_1,cuota_12);

 let numeros = [30,12,67,45,3,76,4,2,0,2,]
 
 //spread .... con arreglos 

//envio lista_montos y tipos_cuotas con spred para que sean string a otro_arreglo
 let otro_arreglo = [...lista_montos , ...tipos_cuotas];
 console.log("los dos arreglos transformados a String :",otro_arreglo)

 console.log("muestra arreglo tipo cuotas:",tipos_cuotas);
 console.log("con spread lista amigos :",...lista_montos);

 console.log(numeros);
 console.log("numeros con Spread :",...numeros);
 console.log("numeros max ...",Math.max(...numeros));
 console.log("numeros min ...",Math.min(...numeros));
 