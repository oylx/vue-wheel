<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelPopover",
        data () {
            return {visible: false}
        },
        methods: {
            xxx () {
                this.visible = !this.visible;
                if (this.visible === true) {
                    console.log('div打开popover')
                    setTimeout(()=>{
                        let eventHandler = ()=>{
                            this.visible = false;
                            console.log('document关闭popover');
                            document.removeEventListener('click',eventHandler)
                        }
                        document.addEventListener('click',eventHandler)
                    },0)
                }else{
                    console.log('div隐藏 popover')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    }
</style>