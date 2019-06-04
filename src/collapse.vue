<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapse"
    }
</script>

<style scoped lang="scss">
    $border-color:#dddddd;
    $border-radius:4px;
    .collapse{
        border: solid 1px $border-color;
        border-radius: $border-radius;
    }
</style>