<template>
    <div class="tabs-pane" :class="tabsActiveClasses" v-show="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'WheelTabsPane',
        data(){
            return{
                active:false
            }
        },
        computed:{
            tabsActiveClasses () {
                return {
                    active: this.active
                }
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name===name
            })
        }
    }
</script>
<style scoped lang="scss">
    .tabs-pane{
        &.active{
            background:red;
        }
    }
</style>
