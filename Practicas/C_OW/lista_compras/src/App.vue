<script setup>
import { ref } from "vue";
import EncabezadoComponentes from "./components/EncabezadoComponentes.vue";
import ListaItems from "./components/ListaItems.vue";
import PieComponente from "./components/PieComponente.vue";
import NuevoItem from "./components/NuevoItem.vue";

let listado = ref([
  {
    producto: "Pan",
    prioridad: "baja"
  },
  {
    producto: "Leche",
    prioridad: "media"
  },
  {
    producto: "Manzanas",
    prioridad: "alta"
  }
]);

const pushear = (nuevoProducto) => {
  listado.value.push(nuevoProducto);
};  

const eliminar = (index) => {
  listado.value.splice(index, 1);
}; // splice para que no quede un hueco en el array ejem: [1,2,3,4] si se elimina el 2 queda [1,3,4]

const editar = (index, edited) => {
  listado.value[index] = edited;
};

</script>

<template>
  <EncabezadoComponentes />
  <ListaItems :mis-compras="listado" @eliminar-item="eliminar" @editar-item="editar"/>
  <NuevoItem @agregar-item="pushear" />
  <PieComponente />
</template>

<style scoped></style>
