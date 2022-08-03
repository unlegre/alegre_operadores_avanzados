//trae por Id un solo elemmento
let titulo =document.getElementById("titulo");
console.log(titulo);

//innerText
titulo.innerText ="bienvenidos a Efectivo ya !!!"
console.log("muestro lo q tiene innerText",titulo.innerText);

Swal.fire({
  text:" Complete los datos solicitados para su prerstamos",

})

let lista_usuario =[];

function calcular_prestamo (monto_1,cuotas_1){
  if( cuotas_1 == 3){
    return monto_1 * 1.25
  }
  else if(cuotas_1 == 6){
    return monto_1 * 1.40 
  }
  else if(cuotas_1 == 12){
    return monto_1 * 1.60
  }
  else if(cuotas_1 == 18){
    return monto_1 * 1.90
  }
  else{
    console.log("ingrese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

class Prestamo{
  constructor(monto_1,cuotas_1){
    this.monto_1 = monto_1;
    this.cuotas_1 = cuotas_1;
  }
} 

let lista_prestamo =[];

// OPERADOR TERNARIO

let boton_edad= document.getElementById("boton_edad");
boton_edad.addEventListener("click",function(){
  let edad = parseInt(prompt("ingrese edad"));

  edad >= 18 ? aprueba_prestamo(): no_aprueba_prestamo();
});



function aprueba_prestamo (){
    alert("Comience con la Solicitud");
};

function no_aprueba_prestamo (){
  alert("No tiene edad suficinete para solicitar prestamo");
};


//boton simulador con funcion
let boton_simulador= document.getElementById("boton_simulador");

boton_simulador.addEventListener("click",function(){
  alert(" Siga los pasos para su prerstamos");
 for  ( let i= 0; i < 1 ; i++){

    let monto_1 = parseInt(prompt(" Monto a Solicitar"))
    let cuotas_1 = parseInt(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));
    
    calcular_prestamo (monto_1,cuotas_1)
    
    let total_prestamo = calcular_prestamo (monto_1,cuotas_1)/cuotas_1;
    console.log("usted va a pagar por cuotas :",total_prestamo ) 
    alert("usted va a pagar :"+" "+cuotas_1+" "+"cuotas de :"+total_prestamo);
  
    let nuevo_prestamo = new Prestamo(monto_1,cuotas_1);// creo nuevo_prestamo  para capturar los datos de la class :Prestamo
    lista_prestamo.push(nuevo_prestamo); // ahora envio con un push los datos al arreglo Lista_prestamo []; que se cargo en ;nuevo_prestamo
  
} 
  console.log(lista_prestamo); // y muestro por consola el arreglo:  Lista_prestamo [];

}
);
// monto y cuotas


let cuotas_3 =document.getElementById("cuotas_3");

cuotas_3.addEventListener("click",function(){
    alert("3 cuotas");
    }
    ) 

    let ceis =document.getElementById("ceis");

    ceis.addEventListener("click",function(){
    alert("6 cuotas");
    }
    )

    let doce =document.getElementById("doce");

    doce.addEventListener("click",function(){
    alert("12 cuotas");
    }
    ) 

    let diez_y_ocho =document.getElementById("diez_y_ocho");

    diez_y_ocho.addEventListener("click",function(){
    alert("18 cuotas");
    }
    ) 



//even listener  puedo ejecutar varias funciones
let Bajo_dependencia = document.getElementById("Bajo_dependencia");

Bajo_dependencia.addEventListener("click",function(){
console.log("selecciono : Bajo dependencia");
}
); 

Bajo_dependencia.addEventListener("click",function(){
    alert("selecciono : Bajo dependencia");
    }
    ); 

    let Monotributista = document.getElementById("Monotributista");

    Monotributista.addEventListener("click",function(){
console.log("selecciono : Monotributista");
}
); 

Monotributista.addEventListener("click",function(){
    alert("selecciono : Monotributista");
    }
    ); 

    let Jubilado = document.getElementById("Jubilado");

    Jubilado.addEventListener("click",function(){
    console.log("selecciono : Jubilado");
    }
    ); 
    
    Jubilado.addEventListener("click",function(){
        alert("selecciono : Jubilado");
        }
        ); 

    let dni = document.getElementById("dni");

    Bajo_dependencia.addEventListener("click",function(){
    console.log("selecciono : Dni");
    }
    ); 
    
    dni.addEventListener("click",function(){
        alert("selecciono : Dni");
        }
        ); 

        let arreglo_prestamo =[]
          
        function dar_prestamo(){
            // capturo el input y me tarigo el nodo con id "nombre" y "apellido"
            let importe_cuotas =document.getElementById("importe_cuotas");
            let Cantidad_cuotas =document.getElementById("Cantidad_cuotas");
        
            //creamos un objeto literal y con value solo traemos el valor osea el nombre , no todo el nodo 
            let data_prestamo = {"importe_cuotas":importe_cuotas.value ,"Cantidad_cuotas":Cantidad_cuotas.value}
            // 
            
            arreglo_prestamo.push(data_prestamo)// pusheo todod el arrglo q esta en la variable "usuario"
          
            let prestamo_jSON= JSON.stringify(arreglo_prestamo); // convierto todo el arreglo a texto plano
            localStorage.setItem("data_prestamo",prestamo_jSON);
            // traigo el primer elemento del local storage
            let recuperando_data_json = localStorage.getItem("data_prestamo");
            console.log(JSON.parse(recuperando_data_json));
        

        }
        
        let btn_solicitar = document.getElementById("btn_solicitar");
        // capturo los datos con clik . en el evento de tocar el btn registar
        btn_solicitar.addEventListener("click",dar_prestamo); 
             

// creo para registar con un arreglo de objetos usuarios 

// JSON =notacion de objeto de JS, Formato basado en texto plano

let arreglo_usuarios =[]

console.log("SPREAD de Arreglo Usuarios",...arreglo_usuarios);

function set_data(){
    // capturo el input y me tarigo el nodo con id "nombre" y "apellido"
    let nombre_usuario =document.getElementById("nombre");
    let apellido_usuario =document.getElementById("apellido");
    let telefono_usuario =document.getElementById("telefono");
    let email_usuario =document.getElementById("email");
    //creamos un objeto literal y con value solo traemos el valor osea el nombre , no todo el nodo 
    let usuario = {"nombre":nombre_usuario.value ,"apellido":apellido_usuario.value,"telefono":telefono_usuario.value,"email":email_usuario.value }
    // 
    
    arreglo_usuarios.push(usuario)// pusheo todod el arrglo q esta en la variable "usuario"
  
    let arreglo_jSON= JSON.stringify(arreglo_usuarios); // convierto todo el arreglo a texto plano
    localStorage.setItem("usuarios",arreglo_jSON);
    // traigo el primer elemento del local storage
    let recuperando_json = localStorage.getItem("usuarios");
    console.log(JSON.parse(recuperando_json));


}

let boton  = document.getElementById("boton");
// capturo los datos con clik . en el evento de tocar el btn registar
boton.addEventListener("click",set_data);
        








