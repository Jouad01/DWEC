<template>
    <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-expansion-item
        v-for="animal in animals"
        :key="animal.id" expand-separator
        :label="animal.nombre"
        :caption="animal.sexo"
        icon="pets"
        >
        <q-card>
          <q-card-section>
            <div>Registro: {{ animal.numeroRegistro }}</div>
            <br>
            <div>Tipo: {{ animal.tipo }}</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import {api} from 'boot/axios'

export default {
  data() {
    return {
      animals: []
    };
  },
  async created() {
    await this.list();
  },
  methods: {
    async list() {
      const peticion = await api.get('getanimals.php');
      this.animals = peticion.data;
    }
  }
};



</script>
