// console.log("uno");
// console.log("dos");
// // setTimeout(() => {
    // //     alert("hola mundo")
    // // }, 10000);
    // console.log("tres");
    // console.log("cuatro");
    // console.log("cinco");
    
const table=document.querySelector("table")
const tbody=document.querySelector("tbody")
const btnNewEnviar=document.querySelector("#btn-enviar")
const btnNewEliminar=document.querySelector("#btn-eliminar")

async function llamadoAUnaAPI() {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/categories')// el await hace que espere la funcion para que vaya y solicite los datos al respectivo servidor de datos -LLAMAR LOS DATOS
    const datos = await respuesta.json()//transformamos los datos JSON a código JS (lista de objetos)
    console.log(datos);
    // return(datos.results)
    index(datos,tbody)
}


//funcion que me lista los datos normales
function index(datos, tbody){
    // tbody.innerHTML=""
    datos.forEach(datePlatziCat => {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${datePlatziCat.id}</th>
            <td>${datePlatziCat.name}</td>
            <td><img src="${datePlatziCat.image}" alt="${datePlatziCat.name}" width=100px></td>
        </tr>
        `
        
    });
}


const newCategory={
    name:"Camilin",
    gender:"male",
    image:"https://cdn.pixabay.com/photo/2020/05/27/02/00/man-5225389_1280.png"
}

async function envioDatosAPI() {
    await fetch("https://api.escuelajs.co/api/v1/categories",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newCategory)
    })  
    location.reload()
}
async function eliminar(){
    let id = prompt("ingresar el ID de la categoria que quieres eliminar")
    await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    location.reload()
   
}
llamadoAUnaAPI()
// GET=> OBTENER INFORMACION
// POST=> ENVIAR INFORMACION
// PUT=> ACTUALIZAR INFORMACION
// PATCH=> ACTUALIZAR UN DATO PUNTUALMENTE
// DELETE=> PARA ELIMINAR

btnNewEliminar.addEventListener("click", eliminar)
btnNewEnviar.addEventListener("click", envioDatosAPI)
llamadoAUnaAPI()