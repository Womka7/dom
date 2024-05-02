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

let mascotasVeterinario = [
    {
        nombreMascota: "alaska",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 9,
        pesoMascota: "2 kilos",
        estadoMascota: "estable",
        link: 'https://cdn.shopify.com/s/files/1/0740/0383/files/cute-3106473__340_2048x2048.jpg?v=1541113625',
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "polaco",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 9,
        pesoMascota: "7 kilos",
        estadoMascota: "estable",
        link: 'https://www.mirringo.com.co/Portals/mirringo/articulos-mirringo-panama/que-significa-los-colores-de-los-gatos/GATO-Blanco-y-negro-min.jpg?ver=2023-02-20-171503-600',
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "niña",
        especieMascota: "canino",
        razaMascota: "criollo",
        edadMascota: 8,
        pesoMascota: "12 kilos",
        estadoMascota: "critico",
        link: 'https://img.freepik.com/foto-gratis/hermoso-perro-border-collie-divirtiendose-al-aire-libre_23-2149304031.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1710547200&semt=ais',
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "pola",
        especieMascota: "canino",
        razaMascota: "criollo",
        edadMascota: 4,
        pesoMascota: "14 kilos",
        estadoMascota: "estable",
        link: 'https://blog.laika.com.co/wp-content/uploads/2022/05/p-pexels-barnabas-davoti-8842163.jpg.jpeg',
        propietarioMascota: {
            nombreDueñoMascota: "lucila moreno",
            identificacionDueñoMascota: "15642646",
            telefonoDueñoMascota: "3244645619",
            correoDueñoMascota: "email@gmail.com"
        }
    },
    {
        nombreMascota: "dulce",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 4,
        pesoMascota: "8 kilos",
        estadoMascota: "critico",
        link: 'https://http2.mlstatic.com/D_NQ_NP_859173-MCO52901771689_122022-O.webp',
        propietarioMascota: {
            nombreDueñoMascota: "luisa loaiza",
            identificacionDueñoMascota: "1068923324",
            telefonoDueñoMascota: "3254641667",
            correoDueñoMascota: "luisa@gmail.com"
        }
    },
    {
        nombreMascota: "coco",
        especieMascota: "canino",
        razaMascota: "bullDog",
        edadMascota: 2,
        pesoMascota: "6 kilos",
        estadoMascota: "critico",
        link: 'https://www.superpet.club/blog/wp-content/uploads/2022/02/french-bulldog-1482630_1920-compressed.webp',
        propietarioMascota: {
            nombreDueñoMascota: "marizol rocha",
            identificacionDueñoMascota: "145626448",
            telefonoDueñoMascota: "3656142353",
            correoDueñoMascota: "mary@gmail.com"
        }
    },
    {
        nombreMascota: "colin",
        especieMascota: "canino",
        razaMascota: "loboSiberiano",
        edadMascota: 3,
        pesoMascota: "16 kilos",
        estadoMascota: "estable",
        link: 'https://i1.sndcdn.com/artworks-000627726163-0iqkhe-t500x500.jpg',
        propietarioMascota: {
            nombreDueñoMascota: "valentina lopez",
            identificacionDueñoMascota: "123556560",
            telefonoDueñoMascota: "3254563461",
            correoDueñoMascota: "valentina@gmail.com"
        }
    },
    {
        nombreMascota: "sasha",
        especieMascota: "felino",
        razaMascota: "angora",
        edadMascota: 13,
        pesoMascota: "11 kilos",
        estadoMascota: "critico",
        link: 'https://http2.mlstatic.com/D_NQ_NP_667724-MCO75436055929_032024-O.webp',
        propietarioMascota: {
            nombreDueñoMascota: "laura osorno",
            identificacionDueñoMascota: "164568754",
            telefonoDueñoMascota: "3232251519",
            correoDueñoMascota: "laura@gmail.com"
        }
    },
    {
        nombreMascota: "danger",
        especieMascota: "canino",
        razaMascota: "pastorAleman",
        edadMascota: 12,
        pesoMascota: "10 kilos",
        estadoMascota: "critico",
        link: 'https://dogsfinalguide.com/wp-content/uploads/2023/10/steve-smith-KV1pVY72r-A-unsplash.jpg.webp',
        propietarioMascota: {
            nombreDueñoMascota: "carolina cardona",
            identificacionDueñoMascota: "165969323",
            telefonoDueñoMascota: "305451251",
            correoDueñoMascota: "caro@gmail.com"
        }
    },
    {
        nombreMascota: "ricky",
        especieMascota: "canino",
        razaMascota: "Pincher",
        edadMascota: 3,
        pesoMascota: "2 kilos",
        estadoMascota: "estable",
        link: 'https://www.paraminipinschers.com/wp-content/uploads/2023/12/mini-pincher.webp?ezimgfmt=rs:380x300/rscb1',
        propietarioMascota: {
            nombreDueñoMascota: "laura osorno",
            identificacionDueñoMascota: "16589506",
            telefonoDueñoMascota: "312554854",
            correoDueñoMascota: "cele@gmail.com"
        }
    },
]



for (let i = 0; i < mascotasVeterinario.length; i++) {
    section.innerHTML +=             `
    <div class="card text-capitalize" style="width: 18rem;">
        <img src=${mascotasVeterinario[i].link} alt="Un  perro grande" class="rounded-top w-auto h-100"  ;>
        <div class="card-body p-2">
            <h5 class="card-title text-center">${mascotasVeterinario[i].nombreMascota}</h5>
            <p class="card-text">
                <span class="fw-bold">Especie:</span> ${mascotasVeterinario[i].especieMascota}<br>
                <span class="fw-bold"> raza:</span> ${mascotasVeterinario[i].razaMascota}<br>
                <span class="fw-bold">edad:</span> ${mascotasVeterinario[i].edadMascota}
                </pre>
            </p>
        
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, aliquam eveniet velit, qui libero dignissimos,dicta repellat corrupti optio.
                </p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="button">Adoptame</button>
            </div>
        <!-- <a href="#" class="btn btn-primary">Vamos Toti</a> -->
      </div>
    </div>`

}
