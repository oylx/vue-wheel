<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose">
            {{closeButton.text}}
        </span>
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
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default: 5
            },
            closeButton:{
                type:Object,
                default(){//default如果是对象，必须改写为函数返回，防止被篡改
                    return {
                        text:'关闭',
                        callback:(toast)=>{
                            toast.close()
                        }
                    }
                }
            }
        },
        methods:{
            close(){
                this.$el.remove();//移除元素
                this.$destroy();//死掉
            },
            log(x){
                console.log(x)
            },
            onclickClose(){
                this.close();
                if(this.closeButton && typeof this.closeButton.callback ==='function'){
                    this.closeButton.callback(this)
                }
            }

        },
        created(){
            console.log(this.closeButton)
        },
        mounted() {
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
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
    .close{
        border: 1px solid #000;
        padding-left: 16px;
    }
    .line{
        height: 100%;
        border-left: 1px solid #666666;
    }
</style>