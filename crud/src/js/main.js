// Import our custom CSS
import '../scss/styles.scss'



// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// importo la funcion foreach de operaciones
import { create, index} from './operations.js';


// importo la base de datos
import { coders } from '../../public/data/database.js';
// -----------------------------------------------------
// *****************************************************



import { Chart } from 'chart.js';
import * as echarts  from 'echarts';
import { alertSmallSuccess } from './alert.js';
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


const tbody=document.querySelector("tbody")


const name=document.getElementById("name")
const lastName=document.getElementById("last-name")
const email=document.getElementById("email")
const form=document.querySelector("form")

index(coders,tbody)





// RECORRE LA funcion crear nuevo coder

form.addEventListener("submit",function (event) {
    // console.log(name.value, lastName.value,email.value);  

    create(name, lastName,email, coders)
    // console.log(newCoder);
    form.reset()
    alertSmallSuccess("El coder fue guardado exitosamente")
    index(coders,tbody)

    event.preventDefault()  
})

