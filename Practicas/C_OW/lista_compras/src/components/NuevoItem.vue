<script setup>
import { ref } from 'vue'

const emit = defineEmits(['agregar-item']);

const item= ref('')
const priority= ref('')


const handleClick = () => {
    const nuevoProducto = {
        producto: item.value,
        prioridad: priority.value
    }
    emit('agregar-item', nuevoProducto)
    item.value = '';
    priority.value = '';
}
</script>
<template>
    <section>
        <h3>Nuevo Item</h3>
        <input type="text" placeholder="agua" v-model="item" autofocus>
        <select name="priority" v-model="priority">
            <option value="" disabled>Prioridad</option>
            <option value="baja">baja</option>
            <option value="media">media</option>
            <option value="alta">alta</option>
        </select>
        <button @click="handleClick" v-show="item && priority">Agregar</button>
    </section>
</template>

<style scored>
input {
    font-family: 'Genos', sans-serif;
    border-radius: 4px;
    font-size: black;
    color: white;
    width: 40%;
    margin-right: 5px;
}
</style>