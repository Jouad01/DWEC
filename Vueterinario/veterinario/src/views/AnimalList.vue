<template>
    <div>
        <h1>This is animal list page</h1>
        <!-- {{ this.animales }} -->
        <table>
            <tr>
                <th>Nombre</th>
                <th>Sexo</th>
                <th>Número de registro</th>
                <th>Tipo</th>
                <th>Acción</th>
            </tr>
            <tr v-for="a in animales" :key="a.id">
                <td>{{ a.nombre }}</td>
                <td>{{ a.sexo }}</td>
                <td>
                    <span v-if="a.numero_registro">{{ a.numero_registro }}</span>
                    <span v-else>Sin registro</span>
                </td>
                <td>{{ a.tipo }}</td>
                <td>
                    <router-link :to="'/animal/' + a.id">Editar</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'ListadoAnimales',
    data() {
        return {
            animales: []
        }
    },
    created() {
        this.list();
    },
    methods: {
        async list() {
            const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
            this.animales = await animalesFetch.json();
        }
    }
}
</script>