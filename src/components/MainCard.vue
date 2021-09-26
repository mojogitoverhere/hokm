<template>
    <div class="main-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'main-card',
}
</script>

<style scoped>
.main-card {
    box-shadow: 5px 10px 10px #CCCCCC;
    padding: 3em;
    border-radius: 1.5em;
    background: #F1F1F1;
}
</style>