const sectionTwo = document.querySelector(".adopcion")


mascotasVeterinario.forEach(mascota => {
    sectionTwo.innerHTML +=`
    <div class="card text-capitalize" style="width: 18rem;">
        <img src="${mascota.link}" alt="Un  perro grande" class="rounded-top w-auto h-100"  ;>
        <div class="card-body p-2">
            <h5 class="card-title text-center fw-bold">${mascota.nombreMascota}</h5>
            <p class="card-text">
                <span class="fw-bold">especie:</span> ${mascota.especieMascota}<br>
                <span class="fw-bold">raza:</span>${mascota.razaMascota} <br>
                <span class="fw-bold">edad:</span>${mascota.edadMascota} <br>
                <span class="fw-bold">peso:</span>${mascota.pesoMascota} <br>
                <span class="fw-bold">estado:</span>${mascota.estadoMascota} <br>    
            </pre>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="button">Adoptame</button>
            </div>
        <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
        </div>
    </div>
`
});

const darkTheme = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill color-icon-theme");
}
const lightTheme = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-stars-fill color-icon-theme");
}
const changeTheme = () => {
    const currentTheme = document.querySelector("body").getAttribute("data-bs-theme");
    if (currentTheme === "light") {
        darkTheme();
    } else {
        lightTheme();
    }
}
