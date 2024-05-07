const main=document.querySelector("main")
const footer=document.querySelector("footer")
const header=document.querySelector("header")
const btnExample=createButtonInfo()

// **************************************************************
// ------** insert the element before the container**------------
// **************************************************************
// main.before(btnExample)
 


// **************************************************************
// ------** insert the element after the container**------------
// **************************************************************
// main.after(btnExample)



// **************************************************************
// --** insert the element at the first position in the container**------------
// **************************************************************
// main.prepend(btnExample)



// **************************************************************
// --** insert the element at the last(final) position in the container**------------
// **************************************************************
// main.appendChild(btnExample) //agrega dentro del contenedor en la parte de ultima
// main.append(btnExample,createButtonInfo()) // de esta manera se inserta varios elementos al final del elemento



// **************************************************************
// -----------------** replace all childrens**------------
// **************************************************************
// main.replaceChildren(btnExample)//reemplaza todos los hijos a excepcion del REPLACECHILD que ese solo reemplaza en base a otro
// main.replaceChildren(btnExample,createButtonInfo)



// **************************************************************
// -----** replace  the element with all his childrens**---------
// **************************************************************
// main.replaceWith(btnExample)//borra los hijos y el padre



// **************************************************************
// -----** El element is autodelete**---------
// **************************************************************
// main.remove()//realiza autodestruccion--- elimina el propio elemento no hace replace


// **************************************************************
// ------------------** create a Button**--------------------
// **************************************************************
function createButtonInfo() {
    const btn =document.createElement("button")
    btn.classList.add("btn","btn-info")
    btn.textContent="Point"
    return btn   
}















// console.log(main);
// console.log(main.children);

// const btnDark=document.querySelector(".btn-dark")
// console.log(btnDark.parentElement.parentElement)
// console.log(btnDark.parentElement.parentElement.parentElement.parentElement.parentElement);
// console.log(main.firstElementChild);
// console.log(main.lastElementChild);

console.log(main.previousElementSibling);
console.log(main);
console.log(main.nextElementSibling);