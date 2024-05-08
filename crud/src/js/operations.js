//importo la data quemada en otro archivo y tengo que llamar los parametros para que funcione
// en el momento unicamnete estoy utilizando forEach y por eso se exporta


export function listarIndex(coders,tbody) {
    coders.forEach(coder => {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    });
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