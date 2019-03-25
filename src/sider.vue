<template>
    <transition name="slider">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">close</button>
        </div>

    </transition>
</template>
<script>
    export default {
        name:'WheelSider',
        data(){
          return{
              visible:true
          }
        },
        methods:{
        }
    }

</script>
<style lang="scss" scoped>
    .sider{
        position: relative;
        >button{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .sider-enter-active,.sider-leave-active{
        transition: all .3s;
    }
    .sider-enter,.sider-leave-to{
        margin-left: -200px;
    }
</style>