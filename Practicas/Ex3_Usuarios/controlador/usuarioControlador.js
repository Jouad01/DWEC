import { Usuario } from "../model/usuario.js";

// URL: http://34.90.153.139/ejercicios/usuarios.php
// method: GET
// response: JSON

// export async function GetUsuarios() {
//     const urlUsuarios = "http://34.90.153.139/ejercicios/usuarios.php";
//     const urlTransporte = "http://34.90.153.139/ejercicios/transporte.php";
//     const responseUsuarios = await fetch(urlUsuarios);
//     const dataUsuarios = await responseUsuarios.json();
//     const usuarios = [];
//     for (const element of dataUsuarios) {
//         const responseTransporte = await fetch(`${urlTransporte}?id=${element.transport}`);
//         const dataTransporte = await responseTransporte.json();
//         console.log(dataTransporte);
//         usuarios.push(new Usuario(element.id, element.username, element.name, element.surname, element.sex, dataTransporte));
//             }
//     return usuarios;
// }

// export async function getUsuariosForEach() {
//     // PASO 1
//     const usuariosFetch = await fetch("http://34.90.153.139/ejercicios/usuarios.php");
//     const users = await usuariosFetch.json();
//     let resultado = [];
//     const transportePromise = [];
//     // PASO 2
//     users.forEach((user) => {
//         const transportFetch = fetch("http://34.90.153.139/ejercicios/transporte.php?id=" + user.transport)
//         .then((r) => r.json());
//         transportePromise.push(transportFetch);

//         // PASO 3
//         const usuario = new Usuario(
//             user.idUser,
//             user.username,
//             user.name,
//             user.surname,
//             user.sex,
//             user.transport
//         );
//         resultado.push(usuario);
//     });
//     // PASO 4
//     const respuestaTransportes = await Promise.all(transportePromise);
//     for (let i = 0; i < resultado.length; i++) {
//         resultado[i].transport = respuestaTransportes.find((transport) => {
//             return transport.id === resultado[i].transport;
//         });
//     }
//     return resultado;
// }

export async function getUsuariosConMap() {
    // PASO 1
    const usuariosFetch = await fetch("http://34.90.153.139/ejercicios/usuarios.php");
    let users = await usuariosFetch.json();
    // PASO 2
    let resultadoTotal = users.map(async (user) => {
        const transportFetch = await fetch("http://34.90.153.139/ejercicios/transporte.php?id=" + user.transport);
        const transport = await transportFetch.json();
        // PASO 3
        return new Usuario(user.idUser,
            user.username,
            user.name,
            user.surname,
            user.sex,
            transport);
        });
    // PASO 4
    return await Promise.all(resultadoTotal);
}