<template>
    <div>
        <h1>Nuevo Animal</h1>
        <div>
            <label for="nombre">Nombre</label> <br />
            <input type="text" v-model="animal.nombre" name="nombre" id="nombre" /><br />

            <label for="sexo">Sexo</label><br />
            <input type="radio" name="sexo" id="M" value="M" v-model="animal.sexo" />
            <label for="M" style="margin-right: 20px">MASC</label>
            <input type="radio" name="sexo" id="F" value="F" v-model="animal.sexo" />
            <label for="F">FEM</label><br />
            <label for="numeroRegistro">Número de Registro</label><br />
            <input type="text" v-model="animal.numeroRegistro" name="numeroRegistro" id="numeroRegistro" /><br />

            <label for="tipo">Tipo</label><br />
            <select name="tipo" id="tipo" v-model="animal.tipo">
                <option value="" selected disabled hidden>Tipo de Animal</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Caballo">Caballo</option>
            </select>
            <button v-on:click="guardar">Guardar nuevo animal</button>
            <button v-on:click="modificar">Modificar animal</button>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ListadoAnimales',
    data() {
        return {
            animal: {
                id: null,
                nombre: '',
                sexo: 'M',
                numeroRegistro: '',
                tipo: ''
            },
            urlSave: 'http://34.90.153.139/ejercicios/veterinario/save.php',
            urlGet: 'http://34.90.153.139/ejercicios/veterinario/getanimals.php',
        }
    },
    async created() {
        const idAnimal = this.$route.params.id;
        if (idAnimal) {
            this.titulo = 'Modificar animal';

            const animalesFetch = await fetch(this.urlGet);
            const animales = await animalesFetch.json();

            const animal = animales.find(a => a.id == idAnimal);
            this.animal = {
                id: animal.id,
                nombre: animal.nombre,
                sexo: animal.sexo,
                numeroRegistro: animal.numeroRegistro,
                tipo: animal.tipo
            }
        } else {
            this.titulo = 'Crear animal';
        }
    },
    methods: {
        async guardar() {
            console.log(this.animal);
            const fetchAnimal = await fetch(this.urlSave, {
                method: 'POST',
                body: JSON.stringify(this.animal),
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
            });
            const respuesta = await fetchAnimal.json();
            console.log(respuesta);
        },
        async modificar() {
            console.log(this.animal);
            const fetchAnimal = await fetch(this.urlSave, {
                method: 'POST',
                body: JSON.stringify(this.animal),
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
            });
            const respuesta = await fetchAnimal.json();
            console.log(respuesta);
        }
    }
}
</script>