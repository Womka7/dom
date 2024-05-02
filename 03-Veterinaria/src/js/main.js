const section = document.querySelector("section")

section.classList.add("d-flex", "flex-wrap", "gap-5","justify-content-center")

// console.table(mascotasVeterinario)

// console.log(section);
// console.log("--------------------------------------------------------------------------------------");

// console.log(section.innerHTML); // trae unicamente el contenido
// console.log("--------------------------------------------------------------------------------------");

// console.log(section.outerHTML); //trae tanto el padre como el contendio
// console.log("--------------------------------------------------------------------------------------");


//  ------------for clásico
// for (let i = 0; i < mascotasVeterinario.length; i++) {
//     console.log(mascotasVeterinario[i])

//     section.innerHTML +=`
//     <div class="card text-capitalize" style="width: 18rem;">
//         <img src="${mascotasVeterinario[i].link}" alt="Un  perro grande" class="rounded-top w-auto h-100"  ;>
//         <div class="card-body p-2">
//             <h5 class="card-title text-center"></h5>
//             <p class="card-text">
//                 <span class="fw-bold">especie:</span> ${mascotasVeterinario[i].especieMascota}<br>
//                 <span class="fw-bold">raza:</span>${mascotasVeterinario[i].razaMascota} <br>
//                 <span class="fw-bold">edad:</span>${mascotasVeterinario[i].edadMascota} <br>
//                 <span class="fw-bold">peso:</span>${mascotasVeterinario[i].pesoMascota} <br>
//                 <span class="fw-bold">estado:</span>${mascotasVeterinario[i].estadoMascota} <br>
//                 <span class="fw-bold">dueño:</span>${mascotasVeterinario[i].propietarioMascota.nombreDueñoMascota} <br>      
//             </pre>
//             </p>

//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, aliquam eveniet velit, qui libero dignissimos,dicta repellat corrupti optio.
//                 </p>
//             <div class="d-flex justify-content-center">
//                 <button class="btn btn-primary" type="button">Adoptame</button>
//             </div>
//         <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
//         </div>
//     </div>
// `
    
// }


// // ------------for of
// for (const mascota of mascotasVeterinario) {
//     section.innerHTML +=`
//     <div class="card text-capitalize" style="width: 18rem;">
//         <img src="${mascota.link}" alt="Un  perro grande" class="rounded-top w-auto h-100"  ;>
//         <div class="card-body p-2">
//             <h5 class="card-title text-center"></h5>
//             <p class="card-text">
//                 <span class="fw-bold">especie:</span> ${mascota.especieMascota}<br>
//                 <span class="fw-bold">raza:</span>${mascota.razaMascota} <br>
//                 <span class="fw-bold">edad:</span>${mascota.edadMascota} <br>
//                 <span class="fw-bold">peso:</span>${mascota.pesoMascota} <br>
//                 <span class="fw-bold">estado:</span>${mascota.estadoMascota} <br>
//                 <span class="fw-bold">dueño:</span>${mascota.propietarioMascota.nombreDueñoMascota} <br>      
//             </pre>
//             </p>

//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, aliquam eveniet velit, qui libero dignissimos,dicta repellat corrupti optio.
//                 </p>
//             <div class="d-flex justify-content-center">
//                 <button class="btn btn-primary" type="button">Adoptame</button>
//             </div>
//         <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
//         </div>
//     </div>
// `
// }

// // ------------forEach
mascotasVeterinario.forEach(mascota => {
    section.innerHTML +=`
    <div class="card text-capitalize" style="width: 18rem;">
        <img src="${mascota.link}" alt="Un  perro grande" class="rounded-top w-auto h-100"  ;>
        <div class="card-body p-2">
            <h5 class="card-title text-center">${mascota.nombreMascota}</h5>
            <p class="card-text">
                <span class="fw-bold">especie:</span> ${mascota.especieMascota}<br>
                <span class="fw-bold">raza:</span>${mascota.razaMascota} <br>
                <span class="fw-bold">edad:</span>${mascota.edadMascota} <br>
                <span class="fw-bold">peso:</span>${mascota.pesoMascota} <br>
                <span class="fw-bold">estado:</span>${mascota.estadoMascota} <br>
                <span class="fw-bold">dueño:</span>${mascota.propietarioMascota.nombreDueñoMascota} <br>      
            </pre>
            </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, aliquam eveniet velit, qui libero dignissimos,dicta repellat corrupti optio.
                </p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="button">Adoptame</button>
            </div>
        <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
        </div>
    </div>
`
});

let button = document.querySelector("button");
function limpiar() {
    button.addEventListener("click", function () {
        main.innerHTML = ""
    })
}
limpiar();



// //  ------------for clásico
// for (let i = 0; i < mascotasVeterinario.length; i++) {
//     console.log(mascotasVeterinario[i]);
    
// }

// // ------------for of
// for (const mascota of mascotasVeterinario) {
//     console.log(mascota);
// }

// // ------------forEach
// mascotasVeterinario.forEach(mascota => {
//     console.log(mascota);
// });