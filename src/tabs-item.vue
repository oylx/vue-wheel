<template>
    <div class="tabs-item" @click="xxx" :class="tabsActiveClasses">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'WheelTabsItem',
        data(){
          return{
              active:false
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
        computed: {
            tabsActiveClasses () {
                return {
                    active: this.active
                }
            }
        },
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active =this.name===name
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style scoped lang="scss">
    .tabs-item{
        padding: 0 3em;
        &.active{
            background: red;
        }
    }
</style>
