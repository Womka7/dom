// Import our custom CSS
import '../scss/styles.scss'



// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// importo la funcion foreach de operaciones
import { create, deleteItem, index, updateItem} from './operations.js';


// importo la base de datos
import { coders } from '../../public/data/database.js';
// -----------------------------------------------------
// *****************************************************



import { Chart } from 'chart.js';
import * as echarts  from 'echarts';
import {showSmallSuccess } from './alert.js';
// Swal.fire({
//     title: "Submit your Github username",
//     input: "text",
//     inputAttributes: {
//         autocapitalize: "off"
//     },
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//     showLoaderOnConfirm: true,
//     preConfirm: async (login) => {
//         try {
//             const githubUrl = `
//           https://api.github.com/users/${login}
//         `;
//             const response = await fetch(githubUrl);
//             if (!response.ok) {
//                 return Swal.showValidationMessage(`
//             ${JSON.stringify(await response.json())}
//           `);
//             }
//             return response.json();
//         } catch (error) {
//             Swal.showValidationMessage(`
//           Request failed: ${error}
//         `);
//         }
//     },
//     allowOutsideClick: () => !Swal.isLoading()
// }).then((result) => {
//     if (result.isConfirmed) {
//         Swal.fire({
//             title: `${result.value.login}'s avatar`,
//             imageUrl: result.value.avatar_url
//         });
//     }
// });
// -----------------------------------------------------
// *****************************************************
// -----------------------------------------------------
// *****************************************************

// console.log(coders);


const table=document.querySelector("table")
const tbody=document.querySelector("tbody")
const name=document.getElementById("name")
const lastName=document.getElementById("last-name")
const email=document.getElementById("email")
const form=document.querySelector("form")
let idParaActualizar

index(coders,tbody)





// RECORRE LA funcion crear nuevo coder

form.addEventListener("submit",function (event) {
    // console.log(name.value, lastName.value,email.value);  
    if(idParaActualizar===undefined){
        create(name, lastName,email, coders)
        showSmallSuccess("saved")
    }else{
        updateItem(coders, idParaActualizar,name,lastName, email)
        showSmallSuccess("update!")
        idParaActualizar=undefined//se vuelve a vaciar la variable para que quede libre de utilizar
    }
    // console.log(newCoder);
    form.reset()
    index(coders,tbody)
    event.preventDefault()  
})


table.addEventListener("click", function (event) {


    if (event.target.classList.contains("btn-danger")) {
        const idAEliminar=event.target.getAttribute("data-id")
        console.log(idAEliminar);

// *******************ALTERNATIVA A ELIMINAR********************

        // const idToDelete=event.target.parentElement.parentElement.firstElementChild.textContent
        // console.log(idToDelete);

        deleteItem(coders, idAEliminar)
        showSmallSuccess("coder deleted")
        // hace que se refresque de tal manera que cuando elimine me quite el eliminado
        index(coders,tbody)
    }
// *******************ALTERNATIVA A ACTUALIZAR********************
    if (event.target.classList.contains("btn-warning")){
        idParaActualizar=event.target.getAttribute("data-id")

        const userFound=coders.find(coder => coder.id ==idParaActualizar)

        name.value=userFound.name
        lastName.value=userFound.lastName
        email.value=userFound.email                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
    // else{
    //     showSmallSuccess("le diste click a la tabla")
    // }
})