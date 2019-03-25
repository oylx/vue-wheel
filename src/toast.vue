<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    //方式生硬，可能篡改其他$toast功能
    // Vue.prototype.$toast=function () {
    //     console.log('toast')
    // }

    export default {
        name:'wheelToast',
        mounted() {
        }
    }

</script>
<style lang="scss" scoped>
    $font-size:14px;
    $height:40px;
    $border-radius:4px;
    $color:#ffffff;
    $toast-bg:rgba(0,0,0,.8);
    .toast{
        color: $color;
        font-size: $font-size;
        line-height: 1.8;
        height: $height;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: $border-radius;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        padding: 0 16px;
    }
</style>