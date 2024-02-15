<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <input type="text" v-model="busqueda" @input="filterByLyrics" placeholder="Buscar por letra de canción...">
        <button v-for="categoria in categorias" :key="categoria.id" class="col-sm btn btn-danger btn-lg m-1" type="button"
          @click="filterByCategory(categoria)">{{ categoria.nombre }}</button>
      </div>
      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="sortAscending">Order ascendente</button>
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="sortDescending">Order descendente</button>
      </div>
    </header>
    <!-- <main>
      <div class="cancion" v-for="cancion in cancionesFilter" :key="cancion.id">
        <h1>{{ cancion.titulo }}</h1>
        <span>{{ cancion.letra }}</span>
      </div>
    </main> -->
    <main>      
      <Tarjeta v-for="cancion in cancionesFilter" :key="cancion.id" :titulo="cancion.titulo" :fecha="cancion.fecha">
        <span>{{ cancion.letra }}</span>
      </Tarjeta>
    </main>
  </div>
</template>

<script>
import Tarjeta from '../components/Tarjeta.vue';

export default {
  name: 'Listado',
  components: {
    Tarjeta
  },
  data() {
    return {
      canciones: [],
      cancionesFilter: [],
      categorias: [],
      busqueda: ''
    }
  },
  created() {
    this.list();
  },
  methods: {
    async list() {
      const cancionesFetch = await fetch("./bbdd/canciones.json");
      const categoriasFetch = await fetch("./bbdd/categorias.json");
      this.canciones = await cancionesFetch.json();
      this.categorias = await categoriasFetch.json();
      this.cancionesFilter = this.canciones;
    },
    filterByCategory(categoria) {
      this.cancionesFilter = this.canciones.filter(c => c.categoria_id === categoria.id);
    },
    filterByLyrics() {
      if (this.busqueda === '') {
        this.cancionesFilter = this.canciones;
      } else {
        this.cancionesFilter = this.canciones.filter(c => c.letra.toLowerCase().includes(this.busqueda.toLowerCase()));
      }
    },
    // usando moment.js
    sortAscending() {
      this.cancionesFilter.sort((a, b) => moment(a.fecha).format('YYYYMMDD') - moment(b.fecha).format('YYYYMMDD'));
    },
    sortDescending() {
      this.cancionesFilter.sort((a, b) => moment(b.fecha).format('YYYYMMDD') - moment(a.fecha).format('YYYYMMDD'));
    }
  }
}

</script>




<style scoped lang="scss">
span {
  white-space: pre-line;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div {
  margin: 50px auto;
  text-align: center;
}

.tarjeta:nth-child(even) {
  background-color: #EEEEEE;
}
</style>
