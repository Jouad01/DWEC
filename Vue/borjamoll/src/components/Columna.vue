<template>
    <div>
        <td><slot></slot></td>
    </div>
</template>

<script>
export default {
    name: "Columna",
    props: {
        valor: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
td {
    border: solid 1px green;
}
</style>
