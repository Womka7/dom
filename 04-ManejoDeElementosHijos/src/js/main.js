const main = document.querySelector("main")
const btnExample=document.querySelector(".btn-one")//llamo el btn creado en html

function createButtonSuccess() {
    const button=document.createElement("button")//crear el botón
    button.setAttribute("type","button") //agrega estos atributos al boton

    button.classList.add("btn","btn-success")//agrega estas clases al boton

    button.textContent="Hello"
    return button
}
btnExample.addEventListener("click",function(){

// ******************************************
// ------------------**ADD**----------------
// *********************************************

    // const btnResponse =createButtonSuccess()
    // main.appendChild(btnResponse)// agrega varios hijos autoincrementandose
    
// *********************************************
    
    // main.innerHTML +=`
    // <button 
    //     type="button" class="btn btn-primary">Button inner 
    // </button>`  //el inner HTML RECIBE informacion en HTML para crear los elementos
    
    // console.log(btnResponse);
})


function selectButtonInfo() {
    const btnFound =document.querySelector(".btn-info")
     return (btnFound)
}
btnExample.addEventListener("click",function(){
// ******************************************
// ------------------**DELETE**----------------
// *********************************************

    // const btnForDeleted =selectButtonInfo() 
    // main.removeChild(btnForDeleted)//Elimina el button existente escogido
    
// *********************************************
})


btnExample.addEventListener("click",function(){
// ******************************************
// ------------------**REPLACE**----------------
// *********************************************

    // const newButton =createButtonSuccess()
    // const existenButton=selectButtonInfo()
    // main.replaceChild(newButton,existenButton) //remplaza un valor EXISTENTE por un nuevo valor UNICAMENTE REEMPLAZA 1 VEZ
    
// *********************************************
})


btnExample.addEventListener("click",function(){
    // ******************************************
    // ------------------**INSERT BEFORE**----------------
    // *********************************************
    const newButton =createButtonSuccess()
    const btnReference=selectButtonInfo()
    main.insertBefore(newButton,btnReference)  // inserta antes de una referencia de boton dada
        
    // *********************************************
    })


createButtonSuccess()
selectButtonInfo()
