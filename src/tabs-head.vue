<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'WheelTabsHead',
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm)=>{
                let {width,height,top,left} = vm.$el.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        .line{
            position: absolute;
            bottom: 0;
            border-bottom: solid 2px $blue;
            transition: all 350ms;
        }
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>
