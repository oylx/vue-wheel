<template>
    <div class="toast" ref="toast" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
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
                default:false
            },
            autoCloseDelay:{
                type:Number,
                default: 3
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
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','middle','bottom'].indexOf(value)>-1
                }

            }
        },
        computed:{
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
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
            onClickClose(){
                this.close();
                if(this.closeButton && typeof this.closeButton.callback ==='function'){
                    this.closeButton.callback(this)
                }
            },
            updateStyles(){
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            }


        },
        created(){
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        }
    }

</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
        position: fixed; display: flex;
        color: white; align-items: center; background: $toast-bg; border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
        left: 50%;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top{
            top:0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
    }
</style>