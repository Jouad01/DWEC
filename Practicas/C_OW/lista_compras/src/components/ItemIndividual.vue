<script setup>
import { ref } from "vue"

const props = defineProps({
    item: Object,
    index: Number
})

const emit = defineEmits(['eliminarItem', 'editarItem'])

const prioridades = {
    alta: 'red',
    media: 'yellow',
    baja: 'green'
}

const handleDeleteClick = () => {
    emit('eliminarItem', props.index)
}

const isEditing = ref(false);

const handleEditClick = () => {
    isEditing.value = true;
}

const editedItem = ref({
    producto: props.item.producto,
    prioridad: props.item.prioridad
});

const handleSaveClick = () => {
    emit('editarItem', props.index, editedItem.value);
    isEditing.value = false;
}

</script>

<template>
    <article>
        <div class="nombre">
            <p v-if="!isEditing">{{ props.index + 1 }} - {{ props.item.producto }}</p>
            <div v-else>
                <input type="text" v-model="editedItem.producto" :placeholder="props.item.producto">
            </div>
        </div>
        <div class="resto">
            <p v-if="!isEditing">{{ prioridades[props.item.prioridad] }}</p>
            <div v-else>
                <select name="priority" v-model="editedItem.prioridad" id="">
                    <option value="" disabled>prioridad</option>
                    <option value="baja">baja</option>
                    <option value="media">media</option>
                    <option value="alta">alta</option>
                </select>
            </div>
        </div>
        <div class="resto">
            <div v-if="!isEditing">
                <button @click="handleDeleteClick">Eliminar</button>
                <button @click="handleEditClick">Editar</button>
            </div>
            <div v-else>
                <button @click="handleSaveClick">Guardar</button>
            </div>
        </div>
    </article>
</template>

<style scoped>
article {
    width: auto;
    display: flex;
    align-items: center;
}

.nombre {
    width: 60%;
}

.resto {
    width: 20%;
}

p {
    margin: 0px;
}

input,
select {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
    color: black;
    padding: 0.5em;
}
</style>
