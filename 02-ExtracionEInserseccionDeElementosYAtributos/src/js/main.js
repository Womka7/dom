// const header = document.getElementsByTagName("header")
// console.log(header[0]);

// -----------------------------------------
// ----- de cualquier maner trae la misma informacion ---------
// -----------------------------------------

const header = document.querySelector("header")
// console.log(header);

// ------------- crear un elemento ... ejemplo titulo
const titulo = document.createElement("h1")
console.log(titulo);
titulo.textContent = "Galería de Perritos"//agrega contenido a la etiqueta
// titulo.setAttribute("id","titulo-principal")//agregar atributos a un tag
titulo.id = "titulo-principal"//de esta manera o de la anterior de cualquier manera da el mismo resultado
// titulo.style.color="pink"
// titulo.style="color:green" //de esta manera o de la anterior de cualquier manera da el mismo resultado
titulo.classList.add("text-primary", "text-center", "bg-dark")
// titulo.classList.add("text-center")
// titulo.classList.add("bg-dark")
header.classList.add("pt-5")
header.classList.add("bg-success")
// eliminar
header.classList.remove("pt-5") //elimina

header.appendChild(titulo)

const section = document.querySelector("section")

section.innerHTML 
// console.log(section.innerHTML);

for (let i = 0; i < 70; i++) {
    section.innerHTML+=`
    <div class="card text-capitalize" style="width: 18rem;">
        <img src="./public/img/dog.webp" class="card-img-top" alt="Un  perro grande">
        <div class="card-body">
            <h5 class="card-title text-center">Perrito Toti</h5>
            <p class="card-text"><span class="fw-bold">raza:</span> Mountain Dog <br>
            <span class="fw-bold">edad:</span> 2 años</pre>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, aliquam eveniet velit, qui
            libero dignissimos, quibusdam error animi placeat molestiae exercitationem id modi officia odio
            dicta repellat corrupti optio.</p>
            <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="button">Adoptame</button>
            </div>
        <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
        </div>
    </div>`

}
