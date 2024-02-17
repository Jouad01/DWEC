<template>
    <div>
        <h1>Usuarios</h1>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Sex</th>
                    <th>Transport</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.idUser">
                    <td>{{ user.username }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.surname }}</td>
                    <td>{{ user.sex }}</td>
                    <td>
                        {{ user.transport.nombre }}
                        <img :src="user.transport.url_imagen" alt="Transport image" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { getUsuariosConMap } from './js/usuarioControlador.js';

export default {
    name: 'ListaUsuarios',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.fetchData(); 
    },
    methods: {
        async fetchData() {
            try {
                const users = await getUsuariosConMap();
                this.users = users;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
    }
};
</script>
