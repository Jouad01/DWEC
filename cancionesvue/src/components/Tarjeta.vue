<template>
    <div class="tarjeta">
        <h1>{{ titulo }}</h1>
        <div class="fecha">{{ fecha }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: ['titulo', 'fecha']
}
</script>

<style scoped>
.fecha {
    margin-bottom: 10px;
}
</style>