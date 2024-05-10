//importo la data quemada en otro archivo y tengo que llamar los parametros para que funcione
// en el momento unicamnete estoy utilizando forEach y por eso se exporta



// listar-- en crud se debe llamar index
export function index(coders,tbody) {
    tbody.innerHTML=""
    coders.forEach(coder => {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td>
                <button type="button" data-id=${coder.id} class="btn btn-primary">details</button>
                <button type="button" data-id=${coder.id} class="btn btn-warning">edit</button>
                <button type="button" data-id=${coder.id} class="btn btn-danger">delete</button>
            </td>
        </tr>
        `
    });
}


// función crear nuevo coder -Y GUARDARLOS
export function create(name, lastName,email, coders) {
    const newCoder={
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }

    coders.push(newCoder)
}















// -------------------------------------------------------
// ***************************************************
// -------------------------------------------------------

function withForOf() {

    for (const coder of coders) {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    }
}
// withForOf()


function withForClasico() {
    for (let i = 0; i < coders.length; i++) {
        const coder = coders[i];
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
        // console.log(coders);

    }
}
// withForClasico()
function withForIn() {
    for (const i in coders) {
        const coder = coders[i];
        tbody.innerHTML+= `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    }
}

// withForIn()

// -------------------------------------------------------
// ***************************************************
// -------------------------------------------------------