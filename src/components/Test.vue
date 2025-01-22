<script>
export default {
    data : () => {
        return {
            name: "Hello Manish"
        }
    }
}
</script>
<template>
    <div id="testing">
        {{ name }} Testing

        <br>
        <br>
        <input type="text" v-model="name">
    </div>
</template>
<style>
</style>