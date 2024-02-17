export async function getUsuariosConMap() {
    try {
        // PASO 1
        const usuariosFetch = await fetch("http://34.90.153.139/ejercicios/usuarios.php");
        const usersResponse = await usuariosFetch.json();

        if (!usuariosFetch.ok) {
            throw new Error(`Error fetching users: ${usersResponse.message}`);
        }

        // PASO 2
        let resultadoTotal = usersResponse.map(async (user) => {
            const transportFetch = await fetch("http://34.90.153.139/ejercicios/transporte.php?id=" + user.transport);
            const transportResponse = await transportFetch.json();

            if (!transportFetch.ok) {
                throw new Error(`Error fetching transport for user ${user.idUser}: ${transportResponse.message}`);
            }

            // PASO 3
            return new Usuario(user.idUser,
                user.username,
                user.name,
                user.surname,
                user.sex,
                transportResponse);
        });

        // PASO 4
        return await Promise.all(resultadoTotal);
    } catch (error) {
        console.error(error);
        throw error; // Re-lanza el error para que sea manejado por el código que llama a esta función
    }
}

export class Usuario {
    constructor(idUser, username, name, surname, sex, transport) {
        this.idUser = idUser;
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        this.transport = transport;
    }
}

