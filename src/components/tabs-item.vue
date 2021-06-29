<template>
    <div class="tabs-item" @click="onClick" :class="tabsActiveClasses" :data-name="name">
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
                    active: this.active,
                    disabled: this.disabled
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
            onClick(){
                if (this.disabled) { return }
                this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click', this)
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>
