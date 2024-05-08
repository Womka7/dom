// Import our custom CSS
import '../scss/styles.scss'



// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// importo la funcion foreach de operaciones
import { listarIndex, withForEach } from './operations.js';


// -----------------------------------------------------
// *****************************************************


//importo sweet alert
import Swal from 'sweetalert2';
import { Chart } from 'chart.js';
import * as echarts  from 'echarts';
import { coders } from '../../public/data/database.js';

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

listarIndex(coders,tbody)