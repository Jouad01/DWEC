<template>
  <q-page>
    <!-- <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>
    </q-list> -->
    <!-- MUESTRA ANIMALES -->
    <q-list>
      <h1>This is animal list page</h1>
      <!-- {{ this.animales }} -->
      <!-- <table>
            <tr>
                <th>Nombre</th>
                <th>Sexo</th>
                <th>Número de registro</th>
                <th>Tipo</th>
                <th>Acción</th>
            </tr> -->
      <q-item v-for="a in animales" :key="a.id">
        <q-item-section>
          <q-item-label>{{ a.nombre }}</q-item-label>
          <q-item-label caption lines="2">Sexo: {{ a.sexo }} Número de registro: {{ a.numero_registro }}</q-item-label>
        </q-item-section>
        <td>
          <router-link :to="'/animal/' + a.id">Editar</router-link>
        </td>
      </q-item>
      <!-- </table> -->
    </q-list>
  </q-page>
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue'
import {api} from 'boot/axios'

export default defineComponent({
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
      // const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
      // this.animales = await animalesFetch.json();

      // const peticion = await this.$axios.get('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
      const peticion = await api.get('getanimals.php');
      this.animales = peticion.data;
    }
  }
})

  // setup() {
  //   const animales = ref([]);
  //   async function list() {
  //     const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
  //     animales.value = await animalesFetch.json();

  //     const peticion = await this.$axios.get('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
  //     this.animales = peticion.data;
    
  //   }
  //   onMounted(() => {
  //     list();
  //   })

  //   return {
  //     animales
  //   }
  // }
// })
</script>
